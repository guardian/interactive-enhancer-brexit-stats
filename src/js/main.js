var el = document.createElement('script');
el.src = '<%= path %>/app.js';
document.body.appendChild(el);

//var enhancerCss = require('../css/main.css')
var parentwindow = window.parent;
var parentdoc = window.parent.window.document;

var s = parentdoc.createElement('link');
s.type = 'text/css';
s.rel = 'stylesheet';
s.href = '<%= path %>/main.css';
parentdoc.head.appendChild(s);

var supportingfigures = parentdoc.querySelectorAll('.element-interactive.element--supporting');
var supportingembeds = parentdoc.querySelectorAll('.element-embed.element--supporting');
var interactiveEls = parentdoc.querySelectorAll('.element-interactive');
var embedEls = parentdoc.querySelectorAll('.element-embed');

var headings = Array.from(parentdoc.querySelectorAll('.content__article-body h2, .article__body h2'));

var supportingfiguresarray = (Array.from(supportingfigures)).concat(Array.from(supportingembeds));
var interactiveElsArray = (Array.from(interactiveEls)).concat(Array.from(embedEls));

supportingfiguresarray.forEach(function (f) {
    f.classList.add('gv-brexit-chart')
})

interactiveElsArray.forEach(function(ie) {
    var iesib = ie.nextElementSibling;
    if (iesib != null && iesib.tagName.toLowerCase() == 'figure' )
        {
            var diptychwrapper = parentdoc.createElement('div');
            diptychwrapper.classList.add('diptychwrapper');
            ie.classList.add('diptych-half');
            iesib.classList.add('diptych-half');
            ie.classList.add('diptych-left');
            iesib.classList.add('diptych-right');
            ie.parentNode.insertBefore(diptychwrapper,ie);
            diptychwrapper.insertBefore(iesib,diptychwrapper.firstElementChild,);
            diptychwrapper.insertBefore(ie,iesib);
     }
} )

headings.forEach(function(h){
    if (h.innerText.match("And another thing")) {
        var anotherthingwrapper = parentdoc.createElement('div');
        var anotherthinggraph = h.nextElementSibling;
        var anotherthingpara = h.nextElementSibling.nextElementSibling;
        anotherthingwrapper.classList.add('anotherthing');
        h.parentNode.insertBefore(anotherthingwrapper,h);
        anotherthingwrapper.appendChild(h);
        anotherthingwrapper.appendChild(anotherthinggraph);
        anotherthingwrapper.appendChild(anotherthingpara);
    }

    else if (h.innerText.match("About the forecasts")) {
        var footnotewrapper = parentdoc.createElement('div');
         var footnotepara = h.nextElementSibling;
        footnotewrapper.classList.add('gv-footnote');
        h.parentNode.insertBefore(footnotewrapper,h);
        footnotewrapper.appendChild(h);
        footnotewrapper.appendChild(footnotepara);
    }

    

    else if (h.nextElementSibling != null && h.nextElementSibling.tagName.toLowerCase() == 'h2') {
        h.classList.add('gv-strap');
    }

    else {
        h.classList.add('gv-brexit-heading')
    }
}
)
