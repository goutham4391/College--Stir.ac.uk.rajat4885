var stir=stir||{};stir.altmetric={key:"64d04a1774ca2eb54316de3a8365cda2",max:5,callback:function(t){for(var e,a,r=["<table>","<caption>University of Stirling research papers ranked by Altmetric</caption>","<thead><tr>","<th scope=col>Position</th><th scope=col>Research paper</th><th class=donut scope=col>Altmetric score</th>","</thead></tr>","<tbody>"],i=document.getElementById("top10"),c=0;c<t.results.length;++c)e="http://hdl.handle.net/"+t.results[c].handle,a=t.results[c].doi,r.push("<tr><td>"),r.push((c+1).toString()),r.push("</td><td>"),r.push('<a href="'+e+'">'+t.results[c].title+"</a>"),r.push("</td><td class=donut>"),r.push('<div class=altmetric-embed data-badge-type=donut data-badge-popover=left data-doi="'+a+'" data-hide-no-mentions=true></div>'),r.push("</td></tr>");r.push("</tbody>"),r.push("</table>"),i&&(i.innerHTML=r.join("")),"function"==typeof _altmetric_embed_init&&_altmetric_embed_init(i)}},function(){var t=document.createElement("script"),e="key="+stir.altmetric.key+"&num_results="+stir.altmetric.max;t.src="https://api.altmetric.com/v1/citations/at?"+(e+"&group=stirling&order_by=score&callback=stir.altmetric.callback"+"&citation_type=news%2Carticle%2Cclinical_trial_study_record%2Cdataset%2Cbook%2Cchapter%2Cgeneric"),document.body.insertAdjacentElement("beforeend",t)}();