export const topology = {
  diagram: `
                         INTERNET
                            │
                            │ Fiber
                            ▼
                    ┌───────────────┐
                    │   ISP ONT     |
                    └───────┬───────┘
                            |
                            │ Ethernet
                            |
                            ▼
                    ┌───────────────┐
                    │ Frontier Eero │
                    │    Router     │
                    │   Gateway     │
                    └───────┬───────┘
                            │ LAN
                            ▼
                 ┌─────────────────────┐
                 │ Netgear 8-Port      │
                 │ Managed Switch      │
                 │                     │
                 │ L2 Switching        │
                 │ VLANs               │
                 │ Trunk/Access        │
                 └──────────┬──────────┘
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             │              │              │
             ▼              ▼              ▼
      ┌────────────┐ ┌────────────┐ ┌────────────┐
      │ Patch      │ │ Patch      │ │ Patch      │
      │ Panel      │ │ Panel      │ │ Panel      │
      │ Port 1     │ │ Port 2     │ │ Port 3     │
      └─────┬──────┘ └─────┬──────┘ └─────┬──────┘
            │              │              │
            ▼              ▼              ▼
        ┌───────┐      ┌───────┐      ┌───────┐
        │ NUC 1 │      │ NUC 2 │      │ NUC 3 │
        └───────┘      └───────┘      └───────┘

                            │
                            │ Switch Port 4
                            ▼
                     Patch Panel Port 4
                            │
                            ▼
                      ┌───────────┐
                      │    NAS    │
                      │   4-Bay   │
                      └───────────┘
`,
};