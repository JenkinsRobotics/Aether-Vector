import { VECTOR_UPDATES } from "./VectorUpdates";
import { ApplicationHomeFrame, ApplicationHomeHeader, ApplicationSidebar, ApplicationWelcome, EmptyState, AetherIcon } from '@aether/ui';
import { useStudioApplications } from '@aether/session/applications';
import artwork from '@aether/assets/branding/new-aether-2026-09/aether-vector.webp';
import hero from '@aether/assets/branding/new-aether-2026-09/aether-vector-hero.webp';

export default function App() {
 const apps=useStudioApplications();
 return <ApplicationHomeFrame design="studio" layout="header" className="vector-home">
  <ApplicationHomeHeader design="studio" app="vector" name="Aether Vector" apps={apps} identity/>
  <ApplicationSidebar brand={false} footer={<></>} settings id="vector-home" name="Aether Vector" homeUrl={import.meta.env.DEV?'/':'/vector/'} apps={apps} currentApp="vector" sections={[{id:'home',items:[{id:'home',label:'Home',icon:'home',current:true}]}]}/>
  <main style={{padding:'28px',overflow:'auto',minWidth:0}}>
   <ApplicationWelcome id="vector" updates={VECTOR_UPDATES} name="Aether Vector" description="A space for precise paths, expressive shapes, and your next graphic idea." artwork={<img src={artwork} alt=""/>} wideArtwork={<img src={hero} alt=""/>} badge="Coming soon"/>
   <h2>Get started</h2><EmptyState title="Vector tools are in development" description="Creation tools and the document library will appear here when available." icon={<AetherIcon name="document"/>}/>
  </main>
 </ApplicationHomeFrame>;
}
