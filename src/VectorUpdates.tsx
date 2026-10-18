import {type ApplicationUpdate} from '@aether/ui';
function PathStudy({color,outline=false}:{color:string;outline?:boolean}) {
 return <svg viewBox="0 0 180 220" width="100%" height="100%" aria-hidden="true">
  <path d="M23 152C38 17 148 24 150 126S61 210 23 152Z" fill={outline?'none':color} stroke="#334f71" strokeWidth="3"/>
  <path d="M23 152 38 17M150 126 148 24" stroke="#fff" strokeWidth="2"/>
  {[[23,152],[38,17],[150,126],[148,24]].map(([x,y])=><rect key={x} x={x-4} y={y-4} width="8" height="8" fill="#fff" stroke="#334f71"/>)}
  <circle cx="82" cy="120" r="28" fill={color} opacity=".7"/>
 </svg>;
}
export const VECTOR_UPDATES:ApplicationUpdate[]=[
 {id:'paths',title:'Precision in every curve',description:'A dedicated vector editor for paths, nodes and clean scalable artwork is planned after the first suite release.',status:'Planned',color:'#b4cbe2',artwork:<PathStudy color="#efb489"/>},
 {id:'design',title:'Make your mark',description:'Build logos, illustrations and diagrams with the planned vector design tools. Editor tools are not available yet.',status:'Planned',color:'#cfbedc',artwork:<PathStudy color="#8065aa" outline/>},
];
