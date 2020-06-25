(function(a,b,c,d,e,f){const{registerBlockType:g,createBlock:h}=wp.blocks,{createElement:i}=wp.element,{InspectorControls:j}=wp.blockEditor,{PanelBody:k,RangeControl:l,TextControl:m,ToggleControl:n}=wp.components,{__:o}=wp.i18n;g("wp-document-revisions/revisions-shortcode",{title:o("Document Revisions","wp-document-revisions"),description:o("Display a list of revisions for your document.","wp-document-revisions"),category:"wpdr-category",icon:"list-view",attributes:{id:{type:"number",default:1},numberposts:{type:"number",default:5},summary:{type:"boolean",default:!1},new_tab:{type:"boolean",default:!0}},edit(a){const b=a.attributes,c=a.setAttributes;return i("div",{},[i(f,{block:"wp-document-revisions/revisions-shortcode",attributes:b}),i(j,{},[i(k,{title:o("Selection Criteria","wp-document-revisions"),initialOpen:!0},[i(m,{type:"number",value:b.id,label:o("Document Id","wp-document-revisions"),onChange:function(a){c({id:parseInt(a)})}}),i(l,{value:b.numberposts,label:o("Revisions to Display","wp-document-revisions"),onChange:function(a){c({numberposts:parseInt(a)})},min:1,max:20}),i(n,{type:"boolean",checked:b.summary,label:o("Show Revision Summaries?","wp-document-revisions"),onChange:function(a){c({summary:a})}}),i(n,{type:"boolean",checked:b.new_tab,label:o("Open in New Tab?","wp-document-revisions"),onChange:function(a){c({new_tab:a})}})])])])},save(){return null},transforms:{from:[{type:"block",blocks:["core/shortcode"],isMatch:function({text:a}){return /^\[?document_revisions\b\s*/.test(a)},transform:({text:a})=>{var b=a.toLowerCase();0==b.indexOf("[")&&(b=b.slice(1,b.length-1));var c=b.split(" ");c.shift();var d,e=1,f=5,g=!1,j=!0;for(d of c)if(0!==d.length){var k=d.split("=");(0===k[1].indexOf("'")||0===k[1].indexOf("\""))&&(k[1]=k[1].slice(1,k[1].length-1)),"id"===k[0]&&(e=+k[1]),"number"===k[0]&&(f=+k[1]),"numberposts"===k[0]&&(f=+k[1]),"summary"===k[0]&&"true"===k[1]&&(g=!0),"new_tab"===k[0]&&"false"===k[1]&&(j=!1)}return h("wp-document-revisions/revisions-shortcode",{id:e,numberposts:f,summary:g,new_tab:j})}}],to:[{type:"block",blocks:["core/shortcode"],transform:a=>{var b="[document_revisions ";return""!=a.id&&(b+="id="+a.id),""!=a.numberposts&&(b+=" numberposts="+a.numberposts),b+=a.summary?" summary=true":" summary=false",b+=a.new_tab?" new_tab=true ]":" new_tab=false ]",h("core/shortcode",{text:b})}}]}})})(window.wp.blocks,window.wp.element,window.wp.blockEditor,window.wp.components,window.wp.compose,window.wp.serverSideRender,window.wp.i18n);