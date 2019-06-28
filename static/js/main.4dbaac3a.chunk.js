(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,i){},106:function(e,a,i){},125:function(e,a,i){},126:function(e,a,i){},130:function(e,a,i){"use strict";i.r(a);var n=i(0),r=i.n(n),t=i(9),o=i.n(t),c=(i(78),i(15)),s=i(21),l=i(7),m=i(8),d={en:{male:"Male gender","male.description":"No Description",glycemia:"Blood glucose on admission (mg/dL)","glycemia.description":"The first measured capillary blood glucose on admission",aspects:"ASPECTS on admission (CT Scan)","aspects.description":"ASPECTS measured by the first brain CT Scan on admission Non-evident lesions should be considered as ASPECTS 10",acm:"Hyperdense MCA sign","acm.description":"No Description",microangiopathy:"Leukoaraiosis","microangiopathy.description":"FAZEKAS grade (Fazekas, 1987) 1-6 wasconsidered as leukoaraiosis",lacunar_syndrome:"Lacunar syndrome","lacunar_syndrome.description":"Defined based on The Oxfordshire Community Stroke Project classification system (Bamford, 1991): pure motor OR pure sensory OR sensorimotor symptoms OR ataxic hemiparesis OR clumsy-hand dysarthria",aortic_insufficiency:"Cardio-aortic embolism","aortic_insufficiency.description":"We attested the stroke mechanism Cardio-aortic embolism from SSS-TOAST, an evidence-based system. In our score, we considered all the levels of evidence described in the system. <br/><br/>\n            <b>The presence of a high-risk cardiac source of cerebral embolism (Evident level of confidence):</b><br/><br/>\n            Sources of embolism of thrombotic origin <br/>\n            1. Left atrial thrombus <br/>\n            2. Left ventricular thrombus <br/>\n            3. Atrial fibrillation <br/>\n            4. Paroxysmal atrial fibrillation <br/>\n            5. Sick sinus syndrome <br/>\n            6. Sustained atrial flutter <br/>\n            7. Recent myocardial infarction (within 1 month) <br/>\n            8. Rheumatoid mitral or aortic valve disease <br/>\n            9. Bioprosthetic and mechanical heart valves <br/>\n            10. Chronic myocardial infarction together with low ejection fraction less than 28% <br/>\n            11. Symptomatic congestive heart failure with ejection fraction less than 30% <br/>\n            12. Dilated cardiomyopathy <br/>\n            13. Nonbacterial thrombotic endocarditis <br/><br/>\n            Sources with embolism not predominantly of thrombotic origin <br/><br/>\n            14. Infective endocarditis <br/>\n            15. Papillary fibroelastoma <br/>\n            16. Left atrial myxoma <br/><br/>\n            <b>Evidence of systemic embolism or presence of multiple acute infarctions that have occurred closely related in time within both right and left anterior or both anterior and posterior circulations in the absence of occlusion or near-occlusive stenosis of all relevant vessels; other diseases that can cause multifocal ischemic brain injury such as vasculitis, vasculopathies, and hemostatic or hemodynamic disturbances must not be present (Probable level of confidence)</b> <br/><br/>\n            <b>The presence of a cardiac condition with low or uncertain primary risk of cerebral embolism (see below) or Evidence for evident cardioaortic embolism in the absence of complete diagnostic investigation for other mechanisms (Possible level of confidence)</b> <br/><br/>\n            <i> Sources with low or uncertain primary risk for ischemic stroke </i><br/><br/>\n            17. Mitral annular calcification <br/>\n            18. Patent foramen ovale <br/>\n            19. Atrial septal aneurysm <br/>\n            20. Atrial septal aneurysm and patent foramen ovale <br/>\n            21. Left ventricular aneurysm without thrombus <br/>\n            22. Isolated left atrial smoke (no mitral stenosis or atrial fibrillation) <br/>\n            23. Complex atheroma in the ascending aorta or proximal arch",result:"Result","result.warning":"Given some missing data, the likelihood may be misestimated","result.alert":" <b>Alert - The Score is greater than or equal to 3 <br/><br/>\n                                Increased chance of Hemorrhagic Transformation (HT) within 7 days </b> <br/><br/>\n                                Sensibility: 73.7 (63.6-82.2)% <br/> \n                                Specificity 76.5 (71.7-80.8)% <br/>\n                                Sensibility \xa0(symptomatic cases of HT): 77 (62.2-88.5)% <br/>\n                                Specificity (symptomatic cases of HT): 76.7 (72-81)% <br/>\n                                OR (General HT): 9.10 (95% CI 5.44-15.30, p &lt; 0.001) <br/>\n                                OR (Symptomatic HT): 11.2 (95% CI, 5.30-23.6, p &lt; 0.001) <br/>\n                                ",total:"Total",odd:"Odd ratio",likelihood:"Likelihood (%)",evaluate:"Evaluate",not_available:"Not Available"},pt:{male:"Sexo Masculino","male.description":"Sem descri\xe7\xe3o",glycemia:"Glicemia na admiss\xe3o (mg/dL)","glycemia.description":"A primeira aferi\xe7\xe3o de glicemia capilar na admiss\xe3o hospitalar ",aspects:"ASPECTS admissional","aspects.description":"Aferido pela primeira tomografia computadorizada de enc\xe9falo na admiss\xe3o hospitalar. Aus\xeancia de hipodensidade deve ter score de 10",acm:"Sinal de ACM hiperdensa","acm.description":"Sem descri\xe7\xe3o",microangiopathy:"Microangiopatia","microangiopathy.description":"Graus 1 a 6 na classifica\xe7\xe3o de Fazekas (Fazekas, 1987) foram consideradas como presen\xe7a de microangiopatia ",lacunar_syndrome:"S\xedndrome Lacunar","lacunar_syndrome.description":"Definida de acordo com o The Oxfordshire Community Stroke Project classification system (Bamford, 1991): sintoma motor puro OU sensitivo puro OU sensitivo-motor OU hemiparesia at\xe1xica OU disartria clumsy-hand ",aortic_insufficiency:"Etiologia C\xe1rdio-a\xf3rtica","aortic_insufficiency.description":"Foi classificado como mecanismo etiol\xf3gico cardio-a\xf3rtico segundo os crit\xe9rios propostos no sistema de classifica\xe7\xe3o SSS-TOAST. Todos os n\xedveis de confian\xe7a foram considerados. <br/><br/>\n            <b>Presen\xe7a de uma fonte de embolia cerebral de alto risco (N\xedvel Evidente) </b> <br/><br/>\n            1. Trombo no \xe1trio esquerdo <br/>\n            2. Trombo no ventr\xedculo esquerdo <br/>\n            3. Fibrila\xe7\xe3o atrial <br/>\n            4. Fibrila\xe7\xe3o atrial parox\xedstica <br/>\n            5. S\xedndrome do n\xf3 sinusal <br/>\n            6. Flutter atrial sustentado <br/>\n            7. Infarto do mioc\xe1rdio recente (dentro de 1 m\xeas) <br/>\n            8. Doen\xe7a reum\xe1tica nas valva mitral ou a\xf3rtica <br/>\n            9. Valva biol\xf3gica ou mec\xe2nica <br/>\n            10. Infarto cr\xf4nico do mioc\xe1rdio com fra\xe7\xe3o de eje\xe7\xe3o inferior a 28% <br/>\n            11. Insufici\xeancia card\xedaca sintom\xe1tica com fra\xe7\xe3o de eje\xe7\xe3o inferior a 30% <br/>\n            12. Cardiomiopatia dilatada <br/>\n            13. Endocardite tromb\xf3tica n\xe3o infecciosa <br/><br/>\n            <i>Fonte de origem n\xe3o predominantemente tromb\xf3tica </i> <br/>\n            14. Endocardite infeciosa <br/>\n            15. Fibroelastoma papilar <br/>\n            16. Mixoma atrial esquerdo <br/><br/>\n            <b>Evid\xeancia de embolia sist\xeamica ou presen\xe7a de m\xfaltiplos infartos agudos que ocorreram quase ao mesmo tempo bilateralmente na circula\xe7\xe3o anterior ou posterior, na aus\xeancia de oclus\xe3o ou estenose cr\xedtica em todos os vasos relevantes; outras condi\xe7\xf5es que causem isquemia multifocal como vasculite, vasculopatias e dist\xfarbios de coagula\xe7\xe3o ou hemodin\xe2micos devem n\xe3o estar presentes. (N\xedvel Prov\xe1vel) </b> </br> </br>\n            <b>A presen\xe7a de uma condi\xe7\xe3o card\xedaca com baixo ou incerto risco prim\xe1rio de embolia cerebral (veja abaixo) ou evid\xeancia de evidente embolia cardioa\xf3rtica na aus\xeancia de investiga\xe7\xe3o diagn\xf3stica completa para outros mecanismos. (N\xedvel Poss\xedvel)</b> </br></br>\n            <i>Fontes com baixo ou incerto risco prim\xe1rio para AVC isqu\xeamico </i> </br></br>\n            17. Calcifica\xe7\xe3o do anel mitral </br>\n            18. Forame oval patente </br>\n            19. Aneurisma de septo atrial </br>\n            20. Aneurisma de septo atrial com forame oval patente </br>\n            21. Aneurisma de ventr\xedculo esquerdo sem trombo </br>\n            22. Sombra isolada no \xe1trio esquerdo (sem estenose mitral ou fibrila\xe7\xe3o atrial) </br>\n            23. Ateroma complexo na aorta ascendente ou arco proximal ",result:"Resultado","result.warning":"Considerando dado omisso, a probabilidade por estar subestimada","result.alert":" <b>Alerta: Pontua\xe7\xe3o Total maior que 3 <br/><br/>\n                                Alta chance de transforma\xe7\xe3o hemorr\xe1gica em 7 dias </b> <br/><br/>\n                                Sensibilidade: 73.7 (63.6-82.2)% <br/> \n                                Especificidade 76.5 (71.7-80.8)% <br/>\n                                Sensibilidade para TH Sintom\xe1tica: 77 (62.2-88.5)% <br/>\n                                Especificidade para TH Sintom\xe1tica: 76.7 (72-81)% <br/>\n                                OR para TH Geral: 9.10 (95% CI 5.44-15.30, p &lt; 0.001) <br/>\n                                OR para TH sintom\xe1tica: 11.2 (95% CI, 5.30-23.6, p &lt; 0.001) <br/>\n                                ",total:"Total",odd:"Odd ratio",likelihood:"Probabilidade (%)",evaluate:"Avaliar",not_available:"N\xe3o dispon\xedvel"},es:{male:"Sexo Masculino","male.description":"Sin descripci\xf3n",glycemia:"Glicemia al ingreso (mg/dL)","glycemia.description":"La primera glucosa capilar en sangre medida al ingresso",aspects:"ASPECTS al ingresso","aspects.description":"Medido por la primera tomograf\xeda computarizada cerebral al ingreso. Lesiones no evidentes se deben considerar como \u201cASPECTS 10\u201d",acm:"Sinal de ACM hiperdensa","acm.description":"Sin descripci\xf3n",microangiopathy:"Leucoaraiosis","microangiopathy.description":"Los grados 1 a 6 en la clasificaci\xf3n de Fazekas (Fazekas, 1987) fueron considerados como presencia de microangiopatia",lacunar_syndrome:"S\xedndrome lacunar","lacunar_syndrome.description":"Definido seg\xfan el\xa0\u201cThe Oxfordshire Community Stroke Project classification system\u201d\xa0(Bamford, 1991): s\xedntomas puramente motores O sensoriales O sensoriomotores puros O hemiparesia at\xe1xica O disartria \u201cclumsy-hand\u201d.",aortic_insufficiency:"Embolismo cardio-a\xf3rtico","aortic_insufficiency.description":"\n                Hemos evaluado el mecanismo cardioemb\xf3lico de accidente cerebrovascular a partir de la clasificaci\xf3n basada en evidencia SSS-TOAST. En nuestra puntuaci\xf3n, consideramos todos los niveles de evidencia descritos en la clasificaci\xf3n.\xa0<br/><br/>\n                <b>Presencia de embolismo cerebral de fuente card\xedaca de alto riesgo (Nivel de confianza evidente):</b> <br/><br/>\n                <i>Fuentes de embolismo de origen tromb\xf3tico\xa0</i> <br/><br/>\n                1.\xa0\xa0\xa0\xa0\xa0Trombo de aur\xedcula izquierda <br/>\n                2.\xa0\xa0\xa0\xa0\xa0Trombo de ventr\xedculo izquierdo <br/>\n                3.\xa0\xa0\xa0\xa0\xa0Fibrilaci\xf3n auricular <br/>\n                4.\xa0\xa0\xa0\xa0\xa0Fibrilaci\xf3n auricular parox\xedstica <br/>\n                5.\xa0\xa0\xa0\xa0\xa0S\xedndrome del seno enfermo <br/>\n                6.\xa0\xa0\xa0\xa0\xa0Flutter auricular sostenido <br/>\n                7.\xa0\xa0\xa0\xa0\xa0Infarto agudo de miocardio reciente (Dentro de un mes) <br/>\n                8.\xa0\xa0\xa0\xa0\xa0Enfermedad valvular reum\xe1tica mitral o a\xf3rtica <br/>\n                9.\xa0\xa0\xa0\xa0\xa0Presencia de v\xe1lvulas card\xedacas mec\xe1nicas o bioprot\xe9sicas <br/>\n                10.\xa0\xa0Infarto agudo de miocardio cr\xf3nico asociado a fracci\xf3n de eyecci\xf3n reducida menor del 28% <br/>\n                11.\xa0\xa0Insuficiencia card\xedaca congestiva sintom\xe1tica con fracci\xf3n de eyecci\xf3n menor del 30% <br/>\n                12.\xa0\xa0Miocardiopat\xeda dilatada <br/>\n                13.\xa0\xa0Endocarditis tromb\xf3tica no bacteriana\xa0 <br/><br/>\n                <i>Fuentes de embolismo sin origen tromb\xf3tico predominante</i> <br/> <br/>\n                14.\xa0\xa0Endocarditis infecciosa <br/>\n                15.\xa0\xa0Fibroelastoma papilar <br/>\n                16.\xa0\xa0Mixoma de aur\xedcula izquierda\xa0 <br/><br/>\n                <b>Evidencia de embolismo sist\xe9mico o presencia de m\xfaltiples infartos agudos que ocurrieron estrechamente relacionados en tiempo en territorios de circulaci\xf3n anterior bilateral o en circulaci\xf3n anterior y posterior simult\xe1neamente; en ausencia de: oclusi\xf3n o estenosis cr\xedtica de vasos relacionados topogr\xe1ficamente, otras enfermedades que pueden causar lesiones isqu\xe9micas multifocales como: vasculitis, vasculopat\xedas o alteraciones hemost\xe1ticas o hemodin\xe1micas. (Nivel de confianza probable)\xa0</b><br/><br/>\n                <b>La presencia de uma condici\xf3n card\xedaca con riesgo primario \xa0bajo o incierto para embolismo cerebral (ver abajo) o evidencia de embolismo cardioa\xf3rtico evidente en ausencia de investigaci\xf3n etiol\xf3gica completa para otros mecanismos. (Nivel de confianza posible)\xa0</b> <br/><br/>\n                <i>Fuentes de riesgo primario bajo o incierto para accidente cerebrovascular isqu\xe9mico\xa0</i> <br/><br/>\n                17.\xa0\xa0Calcificaci\xf3n anular mitral <br/>\n                18.\xa0\xa0Foramen ovale permeable <br/>\n                19.\xa0\xa0Aneurisma de septum auricular <br/>\n                20.\xa0\xa0\xa0Aneurisma de septum auricular y foramen ovale permeable <br/>\n                21.\xa0\xa0Aneruisma ventricular izquierdo sin trombo intracavitario <br/>\n                22.\xa0\xa0Contraste ecocardiogr\xe1fico espont\xe1neo auricular izquierdo aislado (sin estenosis mitral ni fibrilaci\xf3n auricular) <br/>\n                23.\xa0\xa0Ateroma complicado en la aorta ascendente o en el arco a\xf3rtico proximal <br/>\n        ",result:"Resultado","result.warning":"Dados algunos datos faltantes, el resultado puede ser subestimado","result.alert":"\n                <b>Alerta: La puntuaci\xf3n es mayor o igual a 3 </b> <br/><br/>\n                <b>Alta probabilidad de transformaci\xf3n hemorr\xe1gica (TH) en 7 d\xedas </b> <br/><br/>\n                Sensibilidad: 73.7 (63.6-82.2)% <br/>\n                Especificidad: 76.5 (71.7-80.8)% <br/>\n                \n                Sensibilidad (los casos de TH sintom\xe1tica): 77 (62.2-88.5)% <br/>\n                Especificidad (los casos de TH sintom\xe1tica): 76.7 (72-81)% <br/>\n                OR (General TH):9.10 (95% CI 5.44-15.30, p &lt; 0.001) <br/>\n                OR (TH sintom\xe1tica): 11.2 (95% CI, 5.30-23.6, p &lt; 0.001)",total:"Total",odd:"Odd ratio",likelihood:"Probabilidad (%)",evaluate:"Evaluar",not_available:"No disponible"}},u=i(57),b=i.n(u),p=(i(99),i(24)),f=i(28),v=i(25),g=i(29),h=(i(100),function(e){function a(){var e,i;Object(p.a)(this,a);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(i=Object(f.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(t)))).render=function(){var e=i.props.activePage?i.props.activePage:"";return console.log(e),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark main-nav py-3"},r.a.createElement("div",{className:"container"},r.a.createElement(c.b,{className:"navbar-brand",to:"/"},"PROpHET"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mt-2 mt-lg-0 ml-auto"},r.a.createElement("li",{className:"nav-item "+("home"==e?"active":"")},r.a.createElement(c.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Link")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Publications"))))))},i}return Object(g.a)(a,e),a}(n.Component));var y=Object(s.d)(Object(m.b)(function(){return{}},function(e){return{changeLanguage:function(a){e({type:"CHANGE_LOCALE",lang:a})}}})(function(e){var a=e.history,i=e.changeLanguage,n=function(e){i(e),a.push("/quiz")};return r.a.createElement("div",null,r.a.createElement(h,{activePage:"home"}),r.a.createElement("div",{className:"logo my-5"},r.a.createElement("img",{src:b.a,alt:""})),r.a.createElement("div",{className:"container buttons-lang"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"},r.a.createElement("button",{onClick:function(){n("en")},className:"btn btn-warning btn-lg btn-block my-2"},"English")),r.a.createElement("div",{className:"col-md"},r.a.createElement("button",{onClick:function(){n("pt")},className:"btn btn-primary btn-lg btn-block my-2"},"Portugu\xeas")),r.a.createElement("div",{className:"col-md"},r.a.createElement("button",{onClick:function(){n("es")},className:"btn btn-success btn-lg btn-block my-2"},"Espa\xf1hol")))))})),E=i(35),N=(i(106),i(5)),S=i.n(N),O=i(133),k=i(134),w=function(e){function a(e,i){var n;return Object(p.a)(this,a),(n=Object(f.a)(this,Object(v.a)(a).call(this,e,i))).openModal=function(){n.setState({showModal:!0})},n.closeModal=function(){n.setState({showModal:!1})},n.state={showModal:!1},n}return Object(g.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props,a=e.question,i=e.value,n=e.disabled,t=e.changeValue,o=e.changeDisabled,c=e.lang,s=e.number,m=void 0!==s&&s,u=e.minRange,b=void 0===u?0:u,p=e.maxRange,f=void 0===p?999:p,v=S()({switch:!0,disabled:n});return r.a.createElement("div",{className:"my-4 question"},r.a.createElement("img",{src:this.props.src,alt:""}),r.a.createElement("div",{onClick:this.openModal,className:"texto"},r.a.createElement("span",null,d[c][a])),r.a.createElement("div",{className:"group"},!m&&r.a.createElement("label",{className:v},r.a.createElement("input",{type:"checkbox",defaultChecked:i,onChange:function(e){return t(a,0==i?1:0)}}),r.a.createElement("span",{className:"slider"})),m&&r.a.createElement("input",{type:"number",className:"number-input",max:f,min:b,required:!0,disabled:n,onChange:function(e){return t(a,+e.target.value)}}),r.a.createElement("label",{className:"checkmark-container",onChange:function(){return o(a)}},r.a.createElement("span",{className:"big"},d[c].not_available),r.a.createElement("span",{className:"small"},"N/A"),r.a.createElement("input",{type:"checkbox",defaultChecked:n}),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement(O.a,{size:"lg",show:this.state.showModal,onHide:this.closeModal},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,null,d[c][a])),r.a.createElement(O.a.Body,null,r.a.createElement(l.a,{id:a+".description"})),r.a.createElement(O.a.Footer,null,r.a.createElement(k.a,{variant:"secondary",onClick:this.closeModal},"Close"))))}}]),a}(n.Component),C=Object(m.b)(function(e,a){return{value:e.answers[a.question].value,disabled:e.answers[a.question].disabled,lang:e.locale.lang}},function(e){return{changeValue:function(a,i){e({type:"CHANGE_VALUE",question:a,value:i})},changeDisabled:function(a,i){e({type:"CHANGE_DISABLED",question:a,value:i})}}})(w),A=(i(125),i(63)),T=i.n(A),q=i(64),j=i.n(q),x=i(65),_=i.n(x),L=i(66),H=i.n(L),P=i(67),F=i.n(P),R=i(68),M=i.n(R),z=i(69),D=i.n(z);var I=Object(m.b)(function(e){return{lang:e.locale.lang}})(function(e){var a=r.a.createRef(),i=e.history,n=e.lang;return r.a.createElement("div",{className:"quiz-container"},r.a.createElement(h,null),r.a.createElement("form",{ref:a,onSubmit:function(e){return e.preventDefault()},className:"inner-quiz"},r.a.createElement("div",{className:"quiz"},r.a.createElement(C,{question:"male",src:T.a}),r.a.createElement(C,{question:"glycemia",src:j.a,minRange:"1",maxRange:"999",number:!0}),r.a.createElement(C,{question:"aspects",src:_.a,minRange:"1",maxRange:"10",number:!0}),r.a.createElement(C,{question:"acm",src:H.a}),r.a.createElement(C,{question:"microangiopathy",src:M.a}),r.a.createElement(C,{question:"lacunar_syndrome",src:F.a}),r.a.createElement(C,{question:"aortic_insufficiency",src:D.a}),r.a.createElement("input",{type:"submit",className:"evaluate my-5",to:"/result",onClick:function(){a.current.reportValidity()&&i.push("/result")},value:d[n].evaluate}))))}),G=(i(126),function(e){function a(){return Object(p.a)(this,a),Object(f.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.props,a=e.probability,i=e.score,n=e.odds,t=e.hasDisabled;return r.a.createElement("div",{className:"result-container"},r.a.createElement(h,null),r.a.createElement("div",{className:"result-inner-container"},r.a.createElement("div",{className:"results"},r.a.createElement("div",{className:"panel large centralized my-5"},r.a.createElement(l.b,{id:"result"})),r.a.createElement("div",{className:"result-item my-5"},r.a.createElement("div",{className:"panel large"},r.a.createElement(l.b,{id:"total"})),r.a.createElement("div",{className:"result-value"},i)),r.a.createElement("div",{className:"result-item my-5"},r.a.createElement("div",{className:"panel large"},r.a.createElement(l.b,{id:"odd"})),r.a.createElement("div",{className:"result-value"},n.toFixed(2))),r.a.createElement("div",{className:"result-item my-5"},r.a.createElement("div",{className:"panel large green"},r.a.createElement(l.b,{id:"likelihood"})),r.a.createElement("div",{className:"result-value red"},(100*a).toFixed(0),"%")),t&&r.a.createElement("div",{className:"alert warning"},r.a.createElement(l.a,{id:"result.warning"})),i>=3&&r.a.createElement("div",{className:"alert"},r.a.createElement(l.a,{id:"result.alert"})),r.a.createElement(c.b,{to:"/",type:"button",className:"btn btn-primary btn-lg btn-block btn-primary"},"Back"))))}}]),a}(n.Component)),B=Object(m.b)(function(e){var a=!1,i=e.questions.reduce(function(i,n){return e.answers[n].disabled?(i[n]=0,a=!0):i[n]=e.answers[n].value,i},{}),n=1*i.male+1*(i.glycemia>=180?1:0)+2*(i.aspects<=7?1:0)+1*i.acm+1*i.microangiopathy-3*i.lacunar_syndrome+1*i.aortic_insufficiency,r=0;switch(n){case-3:case-2:case-1:r=0;break;case 0:r=.09;break;case 1:r=.27;break;case 2:r=.79;break;case 3:r=2.27;break;case 4:r=3.3;break;case 5:case 6:case 7:r=6.9;break;default:r=0}var t=e.questions.reduce(function(a,i){return e.answers[i].disabled?a[i]=0:a[i]=e.answers[i].value,a},{}),o=1.25*t.male-.852+.008*t.glycemia-.407*t.aspects+.822*t.acm+.626*t.microangiopathy-2.193*t.lacunar_syndrome+1.066*t.aortic_insufficiency,c=1/(1+Math.pow(Math.E,-o));return console.log(i),console.log(t),{probability:c,score:n,odds:r,hasDisabled:a}})(G);var V=Object(m.b)(function(e){return{lang:e.locale.lang}})(function(e){var a=e.lang;return r.a.createElement(c.a,{basename:"/PROpHET"},r.a.createElement(l.c,{locale:a,messages:d[a]},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{exact:!0,path:"/",component:y}),r.a.createElement(s.a,{path:"/quiz",component:I}),r.a.createElement(s.a,{path:"/result",component:B}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=i(34),W=i(70),J=i.n(W),K=i(71),Z=i.n(K),$=i(72),Q=i.n($),X=i(33),Y=i(16),ee={answers:{male:{value:0,disabled:!1},glycemia:{value:0,disabled:!1},aspects:{value:0,disabled:!1},acm:{value:0,disabled:!1},microangiopathy:{value:0,disabled:!1},lacunar_syndrome:{value:0,disabled:!1},aortic_insufficiency:{value:0,disabled:!1}},questions:["male","glycemia","aspects","acm","microangiopathy","lacunar_syndrome","aortic_insufficiency"],locale:{lang:"en"}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,a=arguments.length>1?arguments[1]:void 0;return"CHANGE_VALUE"===a.type?Object(Y.a)({},e,{answers:Object(Y.a)({},e.answers,Object(X.a)({},a.question,Object(Y.a)({},e.answers[a.question],{value:a.value})))}):"CHANGE_DISABLED"===a.type?Object(Y.a)({},e,{answers:Object(Y.a)({},e.answers,Object(X.a)({},a.question,Object(Y.a)({},e.answers[a.question],{disabled:!e.answers[a.question].disabled})))}):"CHANGE_LOCALE"===a.type?(localStorage.lang=a.lang,Object(Y.a)({},e,{locale:Object(Y.a)({},e.locale,{lang:a.lang})})):e};i(127),i(54),i(128),i(129);Object(l.d)(J.a),Object(l.d)(Q.a),Object(l.d)(Z.a);var ie=Object(U.b)(ae);localStorage.lang&&ie.dispatch({type:"CHANGE_LOCALE",lang:localStorage.lang}),o.a.render(r.a.createElement(m.a,{store:ie}," ",r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,a){},57:function(e,a,i){e.exports=i.p+"static/media/logo.793ec6f2.png"},63:function(e,a,i){e.exports=i.p+"static/media/male.2c5896c1.png"},64:function(e,a,i){e.exports=i.p+"static/media/glycemia.b3c708a5.png"},65:function(e,a,i){e.exports=i.p+"static/media/aspects.815e25ad.png"},66:function(e,a,i){e.exports=i.p+"static/media/acm.aaf1e1fb.png"},67:function(e,a,i){e.exports=i.p+"static/media/lacunar.1fcd6d1e.png"},68:function(e,a,i){e.exports=i.p+"static/media/leukoaraiosis.9118b784.png"},69:function(e,a,i){e.exports=i.p+"static/media/embolia.df5067ed.png"},73:function(e,a,i){e.exports=i(130)},78:function(e,a,i){},86:function(e,a){},92:function(e,a){},99:function(e,a,i){}},[[73,1,2]]]);
//# sourceMappingURL=main.4dbaac3a.chunk.js.map