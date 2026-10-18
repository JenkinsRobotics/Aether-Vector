# Aether Vector

Launchable application foundation. The homepage says **Coming soon**; creation
and document tools are planned. This product owns its React entry and future
implementation. It consumes presentation from `@aether/ui` and artwork from
`core/assets/branding/`, with no dependency on another product's engine.

Run `npm ci && npm run build` here. Aether Studio registers this build at
`/vector/`; administrators control enablement, team access and theme overrides
through the same controls as CAD and Map. Account controls come from the host.
For isolated UI development, run `npm run dev` (port 5183).

The shared `ComingSoonHome` accepts identity and navigation props. Replace this
app's `src/App.tsx` as product work lands; keep its host id `vector` and route.

Vector pilots `ComingSoonHome navigation="sidebar"`: no top application header.
The full-height left sidebar holds the app identity, Home/Studio navigation,
persistent collapse toggle, and the host's real account/settings at the bottom.
The main page scrolls separately; settings and account menus open above the
footer. Without a host, local theme controls remain available. Creation and
collaboration tools await actual Vector documents; no sample documents or
inactive editor commands are presented as working features.
