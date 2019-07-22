(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,n){},105:function(e,a,n){},111:function(e,a,n){},130:function(e,a,n){},131:function(e,a,n){},132:function(e,a,n){},133:function(e,a,n){},137:function(e,a,n){"use strict";n.r(a);var i=n(0),t=n.n(i),r=n(9),o=n.n(r),c=(n(83),n(10)),s=n(21),l=n(7),m=n(8),d={en:{male:"Male gender","male.description":"No Description",glycemia:"Blood glucose on admission (mg/dL)","glycemia.description":"The first measured capillary blood glucose on admission",aspects:"ASPECTS on admission (CT Scan)","aspects.description":"ASPECTS measured by the first brain CT Scan on admission Non-evident lesions should be considered as ASPECTS 10",acm:"Hyperdense MCA sign","acm.description":"No Description",microangiopathy:"Leukoaraiosis","microangiopathy.description":"FAZEKAS grade (Fazekas, 1987) 1-6 wasconsidered as leukoaraiosis",lacunar_syndrome:"Lacunar syndrome","lacunar_syndrome.description":"Defined based on The Oxfordshire Community Stroke Project classification system (Bamford, 1991): pure motor OR pure sensory OR sensorimotor symptoms OR ataxic hemiparesis OR clumsy-hand dysarthria",aortic_insufficiency:"Cardio-aortic embolism","aortic_insufficiency.description":"We attested the stroke mechanism Cardio-aortic embolism from SSS-TOAST, an evidence-based system. In our score, we considered all the levels of evidence described in the system. <br/><br/>\n            <b>The presence of a high-risk cardiac source of cerebral embolism (Evident level of confidence):</b><br/><br/>\n            Sources of embolism of thrombotic origin <br/>\n            1. Left atrial thrombus <br/>\n            2. Left ventricular thrombus <br/>\n            3. Atrial fibrillation <br/>\n            4. Paroxysmal atrial fibrillation <br/>\n            5. Sick sinus syndrome <br/>\n            6. Sustained atrial flutter <br/>\n            7. Recent myocardial infarction (within 1 month) <br/>\n            8. Rheumatoid mitral or aortic valve disease <br/>\n            9. Bioprosthetic and mechanical heart valves <br/>\n            10. Chronic myocardial infarction together with low ejection fraction less than 28% <br/>\n            11. Symptomatic congestive heart failure with ejection fraction less than 30% <br/>\n            12. Dilated cardiomyopathy <br/>\n            13. Nonbacterial thrombotic endocarditis <br/><br/>\n            Sources with embolism not predominantly of thrombotic origin <br/><br/>\n            14. Infective endocarditis <br/>\n            15. Papillary fibroelastoma <br/>\n            16. Left atrial myxoma <br/><br/>\n            <b>Evidence of systemic embolism or presence of multiple acute infarctions that have occurred closely related in time within both right and left anterior or both anterior and posterior circulations in the absence of occlusion or near-occlusive stenosis of all relevant vessels; other diseases that can cause multifocal ischemic brain injury such as vasculitis, vasculopathies, and hemostatic or hemodynamic disturbances must not be present (Probable level of confidence)</b> <br/><br/>\n            <b>The presence of a cardiac condition with low or uncertain primary risk of cerebral embolism (see below) or Evidence for evident cardioaortic embolism in the absence of complete diagnostic investigation for other mechanisms (Possible level of confidence)</b> <br/><br/>\n            <i> Sources with low or uncertain primary risk for ischemic stroke </i><br/><br/>\n            17. Mitral annular calcification <br/>\n            18. Patent foramen ovale <br/>\n            19. Atrial septal aneurysm <br/>\n            20. Atrial septal aneurysm and patent foramen ovale <br/>\n            21. Left ventricular aneurysm without thrombus <br/>\n            22. Isolated left atrial smoke (no mitral stenosis or atrial fibrillation) <br/>\n            23. Complex atheroma in the ascending aorta or proximal arch",result:"Result","result.warning":"Given some missing data, the likelihood may be misestimated","result.alert":" <b>Alert - The Score is greater than or equal to 3 <br/><br/>\n                                Increased chance of Hemorrhagic Transformation (HT) within 7 days </b> <br/><br/>\n                                Area Under Curve (AUC) 0.82 (0.78-0.86) <br/>\n                                Sensibility: 78 (68-86)% <br/> \n                                Specificity 75 (70-79)% <br/>\n                                Sensibility \xa0(symptomatic cases of HT): 78 (62.2-89.4)% <br/>\n                                Specificity (symptomatic cases of HT): 75 (70-80)% <br/>\n                                OR (General HT): 10.6 (95% CI 6-18.6, p &lt; 0.001) <br/>\n                                OR (Symptomatic HT): 10.7 (95% CI, 4.9-23.3, p &lt; 0.001) <br/>\n                                ",total:"Total",odd:"Odd ratio",likelihood:"Probability of hemorrhagic transformation (%)",evaluate:"Evaluate",not_available:"Not Available"},pt:{male:"Sexo Masculino","male.description":"Sem descri\xe7\xe3o",glycemia:"Glicemia na admiss\xe3o (mg/dL)","glycemia.description":"A primeira aferi\xe7\xe3o de glicemia capilar na admiss\xe3o hospitalar ",aspects:"ASPECTS admissional","aspects.description":"Aferido pela primeira tomografia computadorizada de enc\xe9falo na admiss\xe3o hospitalar. Aus\xeancia de hipodensidade deve ter score de 10",acm:"Sinal da ACM hiperdensa","acm.description":"Sem descri\xe7\xe3o",microangiopathy:"Microangiopatia","microangiopathy.description":"Graus 1 a 6 na classifica\xe7\xe3o de Fazekas (Fazekas, 1987) foram consideradas como presen\xe7a de microangiopatia ",lacunar_syndrome:"S\xedndrome Lacunar","lacunar_syndrome.description":"Definida de acordo com o The Oxfordshire Community Stroke Project classification system (Bamford, 1991): sintoma motor puro OU sensitivo puro OU sensitivo-motor OU hemiparesia at\xe1xica OU disartria clumsy-hand ",aortic_insufficiency:"Etiologia C\xe1rdio-a\xf3rtica","aortic_insufficiency.description":"Foi classificado como mecanismo etiol\xf3gico cardio-a\xf3rtico segundo os crit\xe9rios propostos no sistema de classifica\xe7\xe3o SSS-TOAST. Todos os n\xedveis de confian\xe7a foram considerados. <br/><br/>\n            <b>Presen\xe7a de uma fonte de embolia cerebral de alto risco (N\xedvel Evidente) </b> <br/><br/>\n            1. Trombo no \xe1trio esquerdo <br/>\n            2. Trombo no ventr\xedculo esquerdo <br/>\n            3. Fibrila\xe7\xe3o atrial <br/>\n            4. Fibrila\xe7\xe3o atrial parox\xedstica <br/>\n            5. S\xedndrome do n\xf3 sinusal <br/>\n            6. Flutter atrial sustentado <br/>\n            7. Infarto do mioc\xe1rdio recente (dentro de 1 m\xeas) <br/>\n            8. Doen\xe7a reum\xe1tica nas valva mitral ou a\xf3rtica <br/>\n            9. Valva biol\xf3gica ou mec\xe2nica <br/>\n            10. Infarto cr\xf4nico do mioc\xe1rdio com fra\xe7\xe3o de eje\xe7\xe3o inferior a 28% <br/>\n            11. Insufici\xeancia card\xedaca sintom\xe1tica com fra\xe7\xe3o de eje\xe7\xe3o inferior a 30% <br/>\n            12. Cardiomiopatia dilatada <br/>\n            13. Endocardite tromb\xf3tica n\xe3o infecciosa <br/><br/>\n            <i>Fonte de origem n\xe3o predominantemente tromb\xf3tica </i> <br/>\n            14. Endocardite infeciosa <br/>\n            15. Fibroelastoma papilar <br/>\n            16. Mixoma atrial esquerdo <br/><br/>\n            <b>Evid\xeancia de embolia sist\xeamica ou presen\xe7a de m\xfaltiplos infartos agudos que ocorreram quase ao mesmo tempo bilateralmente na circula\xe7\xe3o anterior ou posterior, na aus\xeancia de oclus\xe3o ou estenose cr\xedtica em todos os vasos relevantes; outras condi\xe7\xf5es que causem isquemia multifocal como vasculite, vasculopatias e dist\xfarbios de coagula\xe7\xe3o ou hemodin\xe2micos devem n\xe3o estar presentes. (N\xedvel Prov\xe1vel) </b> </br> </br>\n            <b>A presen\xe7a de uma condi\xe7\xe3o card\xedaca com baixo ou incerto risco prim\xe1rio de embolia cerebral (veja abaixo) ou evid\xeancia de evidente embolia cardioa\xf3rtica na aus\xeancia de investiga\xe7\xe3o diagn\xf3stica completa para outros mecanismos. (N\xedvel Poss\xedvel)</b> </br></br>\n            <i>Fontes com baixo ou incerto risco prim\xe1rio para AVC isqu\xeamico </i> </br></br>\n            17. Calcifica\xe7\xe3o do anel mitral </br>\n            18. Forame oval patente </br>\n            19. Aneurisma de septo atrial </br>\n            20. Aneurisma de septo atrial com forame oval patente </br>\n            21. Aneurisma de ventr\xedculo esquerdo sem trombo </br>\n            22. Sombra isolada no \xe1trio esquerdo (sem estenose mitral ou fibrila\xe7\xe3o atrial) </br>\n            23. Ateroma complexo na aorta ascendente ou arco proximal ",result:"Resultado","result.warning":"Considerando dado omisso, a probabilidade por estar subestimada","result.alert":" <b>Alerta: Pontua\xe7\xe3o Total maior que 3 <br/><br/>\n                                Alta chance de transforma\xe7\xe3o hemorr\xe1gica em 7 dias </b> <br/><br/>\n                                Area Under Curve (AUC) 0.82 (0.78-0.86) <br/>\n                                Sensibilidade: 78 (68-86)% <br/> \n                                Especificidade 75 (70-79)% <br/>\n                                Sensibilidade para TH Sintom\xe1tica: 78 (62.2-89.4)% <br/>\n                                Especificidade para TH Sintom\xe1tica: 75 (70-80)% <br/>\n                                OR para TH Geral: 10.6 (95% CI 6-18.6, p &lt; 0.001) <br/>\n                                OR para TH sintom\xe1tica: 10.7 (95% CI, 4.9-23.3, p &lt; 0.001) <br/>\n                                ",total:"Total",odd:"Odd ratio",likelihood:"Probabilidade de Transforma\xe7\xe3o Hemorr\xe1gica (%)",evaluate:"Avaliar",not_available:"N\xe3o dispon\xedvel"},es:{male:"Sexo Masculino","male.description":"Sin descripci\xf3n",glycemia:"Glicemia al ingreso (mg/dL)","glycemia.description":"La primera glucosa capilar en sangre medida al ingresso",aspects:"ASPECTS al ingresso","aspects.description":"Medido por la primera tomograf\xeda computarizada cerebral al ingreso. Lesiones no evidentes se deben considerar como \u201cASPECTS 10\u201d",acm:"Sinal de ACM hiperdensa","acm.description":"Sin descripci\xf3n",microangiopathy:"Leucoaraiosis","microangiopathy.description":"Los grados 1 a 6 en la clasificaci\xf3n de Fazekas (Fazekas, 1987) fueron considerados como presencia de microangiopatia",lacunar_syndrome:"S\xedndrome lacunar","lacunar_syndrome.description":"Definido seg\xfan el\xa0\u201cThe Oxfordshire Community Stroke Project classification system\u201d\xa0(Bamford, 1991): s\xedntomas puramente motores O sensoriales O sensoriomotores puros O hemiparesia at\xe1xica O disartria \u201cclumsy-hand\u201d.",aortic_insufficiency:"Embolismo cardio-a\xf3rtico","aortic_insufficiency.description":"\n                Hemos evaluado el mecanismo cardioemb\xf3lico de accidente cerebrovascular a partir de la clasificaci\xf3n basada en evidencia SSS-TOAST. En nuestra puntuaci\xf3n, consideramos todos los niveles de evidencia descritos en la clasificaci\xf3n.\xa0<br/><br/>\n                <b>Presencia de embolismo cerebral de fuente card\xedaca de alto riesgo (Nivel de confianza evidente):</b> <br/><br/>\n                <i>Fuentes de embolismo de origen tromb\xf3tico\xa0</i> <br/><br/>\n                1.\xa0\xa0\xa0\xa0\xa0Trombo de aur\xedcula izquierda <br/>\n                2.\xa0\xa0\xa0\xa0\xa0Trombo de ventr\xedculo izquierdo <br/>\n                3.\xa0\xa0\xa0\xa0\xa0Fibrilaci\xf3n auricular <br/>\n                4.\xa0\xa0\xa0\xa0\xa0Fibrilaci\xf3n auricular parox\xedstica <br/>\n                5.\xa0\xa0\xa0\xa0\xa0S\xedndrome del seno enfermo <br/>\n                6.\xa0\xa0\xa0\xa0\xa0Flutter auricular sostenido <br/>\n                7.\xa0\xa0\xa0\xa0\xa0Infarto agudo de miocardio reciente (Dentro de un mes) <br/>\n                8.\xa0\xa0\xa0\xa0\xa0Enfermedad valvular reum\xe1tica mitral o a\xf3rtica <br/>\n                9.\xa0\xa0\xa0\xa0\xa0Presencia de v\xe1lvulas card\xedacas mec\xe1nicas o bioprot\xe9sicas <br/>\n                10.\xa0\xa0Infarto agudo de miocardio cr\xf3nico asociado a fracci\xf3n de eyecci\xf3n reducida menor del 28% <br/>\n                11.\xa0\xa0Insuficiencia card\xedaca congestiva sintom\xe1tica con fracci\xf3n de eyecci\xf3n menor del 30% <br/>\n                12.\xa0\xa0Miocardiopat\xeda dilatada <br/>\n                13.\xa0\xa0Endocarditis tromb\xf3tica no bacteriana\xa0 <br/><br/>\n                <i>Fuentes de embolismo sin origen tromb\xf3tico predominante</i> <br/> <br/>\n                14.\xa0\xa0Endocarditis infecciosa <br/>\n                15.\xa0\xa0Fibroelastoma papilar <br/>\n                16.\xa0\xa0Mixoma de aur\xedcula izquierda\xa0 <br/><br/>\n                <b>Evidencia de embolismo sist\xe9mico o presencia de m\xfaltiples infartos agudos que ocurrieron estrechamente relacionados en tiempo en territorios de circulaci\xf3n anterior bilateral o en circulaci\xf3n anterior y posterior simult\xe1neamente; en ausencia de: oclusi\xf3n o estenosis cr\xedtica de vasos relacionados topogr\xe1ficamente, otras enfermedades que pueden causar lesiones isqu\xe9micas multifocales como: vasculitis, vasculopat\xedas o alteraciones hemost\xe1ticas o hemodin\xe1micas. (Nivel de confianza probable)\xa0</b><br/><br/>\n                <b>La presencia de uma condici\xf3n card\xedaca con riesgo primario \xa0bajo o incierto para embolismo cerebral (ver abajo) o evidencia de embolismo cardioa\xf3rtico evidente en ausencia de investigaci\xf3n etiol\xf3gica completa para otros mecanismos. (Nivel de confianza posible)\xa0</b> <br/><br/>\n                <i>Fuentes de riesgo primario bajo o incierto para accidente cerebrovascular isqu\xe9mico\xa0</i> <br/><br/>\n                17.\xa0\xa0Calcificaci\xf3n anular mitral <br/>\n                18.\xa0\xa0Foramen ovale permeable <br/>\n                19.\xa0\xa0Aneurisma de septum auricular <br/>\n                20.\xa0\xa0\xa0Aneurisma de septum auricular y foramen ovale permeable <br/>\n                21.\xa0\xa0Aneruisma ventricular izquierdo sin trombo intracavitario <br/>\n                22.\xa0\xa0Contraste ecocardiogr\xe1fico espont\xe1neo auricular izquierdo aislado (sin estenosis mitral ni fibrilaci\xf3n auricular) <br/>\n                23.\xa0\xa0Ateroma complicado en la aorta ascendente o en el arco a\xf3rtico proximal <br/>\n        ",result:"Resultado","result.warning":"Dados algunos datos faltantes, el resultado puede ser subestimado","result.alert":"\n                <b>Alerta: La puntuaci\xf3n es mayor o igual a 3 </b> <br/><br/>\n                <b>Alta probabilidad de transformaci\xf3n hemorr\xe1gica (TH) en 7 d\xedas </b> <br/><br/>\n                Area Under Curve (AUC) 0.82 (0.78-0.86) <br/>\n                Sensibilidad: 78 (68-86)% <br/>\n                Especificidad: 75 (70-79)% <br/>\n                \n                Sensibilidad (los casos de TH sintom\xe1tica): 78 (62.2-89.4)% <br/>\n                Especificidad (los casos de TH sintom\xe1tica): 75 (70-80)% <br/>\n                OR (General TH): 10.6 (95% CI 6-18.6, p &lt; 0.001) <br/>\n                OR (TH sintom\xe1tica): 10.7 (95% CI, 4.9-23.3, p &lt; 0.001)",total:"Total",odd:"Odd ratio",likelihood:"Probabilidad de transformaci\xf3n hemorr\xe1gica (%)",evaluate:"Evaluar",not_available:"No disponible"}},u=n(24),b=n.n(u),p=(n(104),n(25)),f=n(29),v=n(26),g=n(30),h=(n(105),function(e){function a(){var e,n;Object(p.a)(this,a);for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).render=function(){var e=n.props.activePage?n.props.activePage:"";return console.log(e),t.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark main-nav py-3"},t.a.createElement("div",{className:"container"},t.a.createElement(c.b,{className:"navbar-brand",to:"/"},"PROpHET"),t.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},t.a.createElement("span",{className:"navbar-toggler-icon"})),t.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},t.a.createElement("ul",{className:"navbar-nav mt-2 mt-lg-0 ml-auto"},t.a.createElement("li",{className:"nav-item "+("home"==e?"active":"")},t.a.createElement(c.b,{className:"nav-link",to:"/"},"Home")),t.a.createElement("li",{className:"nav-item "+("about"==e?"active":"")},t.a.createElement(c.b,{className:"nav-link",to:"/about"},"About")),t.a.createElement("li",{className:"nav-item "+("disclaimer"==e?"active":"")},t.a.createElement(c.b,{className:"nav-link",to:"/disclaimer"},"Disclaimer")),t.a.createElement("li",{className:"nav-item"},t.a.createElement("a",{className:"nav-link",href:"#"},"Publications"))))))},n}return Object(g.a)(a,e),a}(i.Component));var E=Object(s.d)(Object(m.b)(function(){return{}},function(e){return{changeLanguage:function(a){e({type:"CHANGE_LOCALE",lang:a})}}})(function(e){var a=e.history,n=e.changeLanguage,i=function(e){n(e),a.push("/quiz")};return t.a.createElement("div",null,t.a.createElement(h,{activePage:"home"}),t.a.createElement("div",{className:"logo my-5"},t.a.createElement("img",{src:b.a,alt:""})),t.a.createElement("div",{className:"container buttons-lang"},t.a.createElement("div",{className:"row"},t.a.createElement("div",{className:"col-md"},t.a.createElement("button",{onClick:function(){i("en")},className:"btn btn-warning btn-lg btn-block my-2"},"English")),t.a.createElement("div",{className:"col-md"},t.a.createElement("button",{onClick:function(){i("pt")},className:"btn btn-primary btn-lg btn-block my-2"},"Portugu\xeas")),t.a.createElement("div",{className:"col-md"},t.a.createElement("button",{onClick:function(){i("es")},className:"btn btn-success btn-lg btn-block my-2"},"Espa\xf1hol")))))})),y=n(36),N=(n(111),n(5)),S=n.n(N),C=n(139),A=n(140),w=function(e){function a(e,n){var i;return Object(p.a)(this,a),(i=Object(f.a)(this,Object(v.a)(a).call(this,e,n))).openModal=function(){i.setState({showModal:!0})},i.closeModal=function(){i.setState({showModal:!1})},i.state={showModal:!1},i}return Object(g.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props,a=e.question,n=e.value,i=e.disabled,r=e.changeValue,o=e.changeDisabled,c=e.lang,s=e.number,m=void 0!==s&&s,u=e.minRange,b=void 0===u?0:u,p=e.maxRange,f=void 0===p?999:p,v=S()({switch:!0,disabled:i});return t.a.createElement("div",{className:"my-4 question"},t.a.createElement("img",{src:this.props.src,alt:""}),t.a.createElement("div",{onClick:this.openModal,className:"texto"},t.a.createElement("span",null,d[c][a])),t.a.createElement("div",{className:"group"},!m&&t.a.createElement("label",{className:v},t.a.createElement("input",{type:"checkbox",defaultChecked:n,onChange:function(e){return r(a,0==n?1:0)}}),t.a.createElement("span",{className:"slider"})),m&&t.a.createElement("input",{type:"number",className:"number-input",max:f,min:b,required:!0,disabled:i,onChange:function(e){return r(a,+e.target.value)}}),t.a.createElement("label",{className:"checkmark-container",onChange:function(){return o(a)}},t.a.createElement("span",{className:"big"},d[c].not_available),t.a.createElement("span",{className:"small"},"N/A"),t.a.createElement("input",{type:"checkbox",defaultChecked:i}),t.a.createElement("span",{className:"checkmark"}))),t.a.createElement(C.a,{size:"lg",show:this.state.showModal,onHide:this.closeModal},t.a.createElement(C.a.Header,{closeButton:!0},t.a.createElement(C.a.Title,null,d[c][a])),t.a.createElement(C.a.Body,null,t.a.createElement(l.a,{id:a+".description"})),t.a.createElement(C.a.Footer,null,t.a.createElement(A.a,{variant:"secondary",onClick:this.closeModal},"Close"))))}}]),a}(i.Component),O=Object(m.b)(function(e,a){return{value:e.answers[a.question].value,disabled:e.answers[a.question].disabled,lang:e.locale.lang}},function(e){return{changeValue:function(a,n){e({type:"CHANGE_VALUE",question:a,value:n})},changeDisabled:function(a,n){e({type:"CHANGE_DISABLED",question:a,value:n})}}})(w),k=(n(130),n(63)),T=n.n(k),x=n(64),j=n.n(x),q=n(65),P=n.n(q),H=n(66),_=n.n(H),F=n(67),M=n.n(F),z=n(68),L=n.n(z),D=n(69),R=n.n(D);var B=Object(m.b)(function(e){return{lang:e.locale.lang}})(function(e){var a=t.a.createRef(),n=e.history,i=e.lang;return t.a.createElement("div",{className:"quiz-container"},t.a.createElement(h,null),t.a.createElement("form",{ref:a,onSubmit:function(e){return e.preventDefault()},className:"inner-quiz"},t.a.createElement("div",{className:"quiz"},t.a.createElement(O,{question:"male",src:T.a}),t.a.createElement(O,{question:"glycemia",src:j.a,minRange:"1",maxRange:"999",number:!0}),t.a.createElement(O,{question:"aspects",src:P.a,minRange:"1",maxRange:"10",number:!0}),t.a.createElement(O,{question:"acm",src:_.a}),t.a.createElement(O,{question:"microangiopathy",src:L.a}),t.a.createElement(O,{question:"lacunar_syndrome",src:M.a}),t.a.createElement(O,{question:"aortic_insufficiency",src:R.a}),t.a.createElement("input",{type:"submit",className:"evaluate my-5",to:"/result",onClick:function(){a.current.reportValidity()&&n.push("/result")},value:d[i].evaluate}))))}),I=(n(131),n(70)),U=n.n(I),G=n(71),V=n.n(G),J=n(72),W=n.n(J),K=function(e){function a(e,n){var i;Object(p.a)(this,a),(i=Object(f.a)(this,Object(v.a)(a).call(this,e,n))).openModal=function(e){e.preventDefault(),i.setState({showModal:!0})},i.closeModal=function(){i.setState({showModal:!1})};var t=null;return t="en"==e.lang?V.a:"pt"==e.lang?U.a:W.a,i.state={showModal:!1,table:t},i}return Object(g.a)(a,e),Object(y.a)(a,[{key:"render",value:function(){var e=this.props,a=e.probability,n=e.score,i=(e.odds,e.hasDisabled);return t.a.createElement("div",{className:"result-container"},t.a.createElement(h,null),t.a.createElement("div",{className:"result-inner-container"},t.a.createElement("div",{className:"results"},t.a.createElement("div",{className:"panel large centralized my-5"},t.a.createElement(l.b,{id:"result"})),t.a.createElement("div",{className:"result-item my-5"},t.a.createElement("div",{className:"panel large green"},t.a.createElement(l.b,{id:"likelihood"})),t.a.createElement("div",{className:"result-value red"},(100*a).toFixed(0),"%")),t.a.createElement("div",{className:"alert alert-success"},t.a.createElement("b",null,"Information:")," ",t.a.createElement("br",null),"Accuracy 81.3% ",t.a.createElement("br",null),"Area Under Curve (AUC) 0.84 (0.79-0.88) ",t.a.createElement("br",null),"Sensibility 33% ",t.a.createElement("br",null),"Specificity 94% ",t.a.createElement("br",null),"Brier score 0.1 ",t.a.createElement("br",null),"Hosmer-Lemeshow 0.45 ",t.a.createElement("br",null)),i&&t.a.createElement("div",{className:"alert warning"},t.a.createElement(l.a,{id:"result.warning"})),n>=3&&t.a.createElement("div",{className:"alert"},t.a.createElement(l.a,{id:"result.alert"})," ",t.a.createElement("br",null),t.a.createElement(A.a,{variant:"info",className:"px-5",onClick:this.openModal},"Info"),t.a.createElement(C.a,{size:"lg",show:this.state.showModal,onHide:this.closeModal},t.a.createElement(C.a.Header,{closeButton:!0},t.a.createElement(C.a.Title,null)),t.a.createElement(C.a.Body,null,t.a.createElement("img",{className:"table",src:this.state.table,alt:""})),t.a.createElement(C.a.Footer,null,t.a.createElement(A.a,{variant:"secondary",onClick:this.closeModal},"Close")))),t.a.createElement(c.b,{to:"/",type:"button",className:"btn btn-primary btn-lg btn-block btn-primary"},"Back"))))}}]),a}(i.Component),Y=Object(m.b)(function(e){var a=!1,n=e.questions.reduce(function(n,i){return e.answers[i].disabled?(n[i]=0,a=!0):n[i]=e.answers[i].value,n},{}),i=1*n.male+1*(n.glycemia>=180?1:0)+2*(n.aspects<=7?1:0)+1*n.acm+1*n.microangiopathy-3*n.lacunar_syndrome+1*n.aortic_insufficiency,t=0;switch(i){case-3:case-2:case-1:t=0;break;case 0:t=.09;break;case 1:t=.27;break;case 2:t=.79;break;case 3:t=2.27;break;case 4:t=3.3;break;case 5:case 6:case 7:t=6.9;break;default:t=0}var r=e.questions.reduce(function(a,n){return e.answers[n].disabled?a[n]=0:a[n]=e.answers[n].value,a},{}),o=1.25*r.male-.852+.008*r.glycemia-.407*r.aspects+.822*r.acm+.626*r.microangiopathy-2.193*r.lacunar_syndrome+1.066*r.aortic_insufficiency,c=1/(1+Math.pow(Math.E,-o));return console.log(n),console.log(r),{probability:c,score:i,odds:t,hasDisabled:a,lang:e.locale.lang}})(K),Z=(n(132),n(73)),$=n.n(Z);var Q=function(e){return t.a.createElement("div",{className:"about-container"},t.a.createElement(h,{activePage:"about"}),t.a.createElement("div",{className:"container"},t.a.createElement("div",{className:"logo-container"},t.a.createElement("img",{src:b.a,alt:""})),t.a.createElement("div",{className:"text"},t.a.createElement("h1",{className:"my-5"},"About"),t.a.createElement("span",{className:"py-4"},"Application developed by Victor Aguiar Evangelista de Farias and Joao Brainer Clares de Andrade"),t.a.createElement("span",{className:"py-2"},"In association with Hospital Geral de Fortaleza (Brazil) and Universidade Federal de Sao Paulo (Brazil) "),t.a.createElement("b",{className:"py-2"},"This project is financed in part by the Coordena\xe7\xe3o de Aperfei\xe7oamento de Pessoal de N\xedvel Superior - Brasil (CAPES) - Finance Code 001 / 88881.189495/2018-01"),t.a.createElement("img",{src:$.a,alt:""}))))};n(133);var X=function(e){return t.a.createElement("div",{className:"disclaimer-container"},t.a.createElement(h,{activePage:"disclaimer"}),t.a.createElement("div",{className:"container"},t.a.createElement("div",{className:"logo-container"},t.a.createElement("img",{src:b.a,alt:""})),t.a.createElement("div",{className:"text"},t.a.createElement("h1",{className:"my-5"},"The Disclaimer"),t.a.createElement("span",{className:"py-4"},"This application is made available by Universidade Federal de Sao Paulo (Brazil) and Hospital Geral de Fortaleza (Brazil), in collaboration with staff of Universidade Federal do Ceara (Brazil) and Columbia University (USA), solely for personal non-commercial, teaching and educational use. This application is not a medical device and does not and should not be construed to provide health-related or medical advice, or clinical decision support, or to support or replace the diagnosis, or other kind of medical decision. This application does not create a physician-patient relationship between the above-mentioned institutions and any individual. You, the user, agree to use this application under understanding about all these terms and conditions."))))};var ee=Object(m.b)(function(e){return{lang:e.locale.lang}})(function(e){var a=e.lang;return t.a.createElement(c.a,{basename:""},t.a.createElement(l.c,{locale:a,messages:d[a]},t.a.createElement("div",{className:"App"},t.a.createElement(s.a,{exact:!0,path:"/",component:E}),t.a.createElement(s.a,{path:"/quiz",component:B}),t.a.createElement(s.a,{path:"/result",component:Y}),t.a.createElement(s.a,{path:"/about",component:Q}),t.a.createElement(s.a,{path:"/disclaimer",component:X}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae=n(35),ne=n(74),ie=n.n(ne),te=n(75),re=n.n(te),oe=n(76),ce=n.n(oe),se=n(34),le=n(16),me={answers:{male:{value:0,disabled:!1},glycemia:{value:0,disabled:!1},aspects:{value:0,disabled:!1},acm:{value:0,disabled:!1},microangiopathy:{value:0,disabled:!1},lacunar_syndrome:{value:0,disabled:!1},aortic_insufficiency:{value:0,disabled:!1}},questions:["male","glycemia","aspects","acm","microangiopathy","lacunar_syndrome","aortic_insufficiency"],locale:{lang:"en"}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;return"CHANGE_VALUE"===a.type?Object(le.a)({},e,{answers:Object(le.a)({},e.answers,Object(se.a)({},a.question,Object(le.a)({},e.answers[a.question],{value:a.value})))}):"CHANGE_DISABLED"===a.type?Object(le.a)({},e,{answers:Object(le.a)({},e.answers,Object(se.a)({},a.question,Object(le.a)({},e.answers[a.question],{disabled:!e.answers[a.question].disabled})))}):"CHANGE_LOCALE"===a.type?(localStorage.lang=a.lang,Object(le.a)({},e,{locale:Object(le.a)({},e.locale,{lang:a.lang})})):e};n(134),n(55),n(135),n(136);Object(l.d)(ie.a),Object(l.d)(ce.a),Object(l.d)(re.a);var ue=Object(ae.b)(de);localStorage.lang&&ue.dispatch({type:"CHANGE_LOCALE",lang:localStorage.lang}),o.a.render(t.a.createElement(m.a,{store:ue}," ",t.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},24:function(e,a,n){e.exports=n.p+"static/media/logo.793ec6f2.png"},56:function(e,a){},63:function(e,a,n){e.exports=n.p+"static/media/male.2c5896c1.png"},64:function(e,a,n){e.exports=n.p+"static/media/glycemia.b3c708a5.png"},65:function(e,a,n){e.exports=n.p+"static/media/aspects.815e25ad.png"},66:function(e,a,n){e.exports=n.p+"static/media/acm.aaf1e1fb.png"},67:function(e,a,n){e.exports=n.p+"static/media/lacunar.1fcd6d1e.png"},68:function(e,a,n){e.exports=n.p+"static/media/leukoaraiosis.9118b784.png"},69:function(e,a,n){e.exports=n.p+"static/media/embolia.df5067ed.png"},70:function(e,a,n){e.exports=n.p+"static/media/Portugues.40d6d637.png"},71:function(e,a,n){e.exports=n.p+"static/media/English.abef84a1.png"},72:function(e,a,n){e.exports=n.p+"static/media/Spanish.c2080d87.png"},73:function(e,a,n){e.exports=n.p+"static/media/capes.e11bd6f9.jpg"},78:function(e,a,n){e.exports=n(137)},83:function(e,a,n){},91:function(e,a){},97:function(e,a){}},[[78,1,2]]]);
//# sourceMappingURL=main.acf6c645.chunk.js.map