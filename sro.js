MathJax.Extension.sro = {};

MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () {
    var VERSION = "1.0";
    
    var TEX = MathJax.InputJax.TeX,
	TEXDEF = TEX.Definitions,
	MML = MathJax.ElementJax.mml,
	HTML = MathJax.HTML;
    
    TEXDEF.macros.sro = "sro";
    TEX.Parse.Augment({
	sro: function(name) {
	    var d = this.GetArgument(name);
	    var content = MML.mtext( d );
	    var aria = MML.mpadded(MML.mphantom(content)).With({height: 0, width: 0, "aria-label": "screen-reader only"});
	    this.Push(aria);
	}
    });
});

MathJax.Ajax.loadComplete("[Extra]/sro.js");
