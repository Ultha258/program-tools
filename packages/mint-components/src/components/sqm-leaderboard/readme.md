# sqm-leaderboard



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                     | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Default            |
| ----------------- | ------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `anonymousUser`   | `anonymous-user`   | Title displayed for users without names                                         | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `"Anonymous User"` |
| `demoData`        | --                 |                                                                                 | `{ states?: { loading: boolean; hasLeaders: boolean; styles: { usersheading: string; statsheading: string; rankheading?: string; showRank?: boolean; hideViewer?: boolean; anonymousUser?: string; }; }; data?: { rankType: string; leaderboard: { value: number; rank: number; firstName: string; lastInitial: string; rowNumber: number; }[]; viewerRank?: { value: number; rank: number; firstName: string; lastInitial: string; rowNumber: number; }; }; elements?: { empty: VNode; loadingstate: VNode; }; }` | `undefined`        |
| `hideViewer`      | `hide-viewer`      | Hide the current user's leaderboard information when they are not in the top 10 | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `false`            |
| `interval`        | `interval`         |                                                                                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined`        |
| `leaderboardType` | `leaderboard-type` |                                                                                 | `"topConvertedReferrers" \| "topStartedReferrers"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | `undefined`        |
| `rankType`        | `rank-type`        |                                                                                 | `"denseRank" \| "rank" \| "rowNumber"`                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | `undefined`        |
| `rankheading`     | `rankheading`      |                                                                                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined`        |
| `showRank`        | `show-rank`        |                                                                                 | `boolean`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | `undefined`        |
| `statsheading`    | `statsheading`     |                                                                                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined`        |
| `usersheading`    | `usersheading`     |                                                                                 | `string`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | `undefined`        |


## Dependencies

### Used by

 - [sqm-stencilbook](../sqm-stencilbook)

### Depends on

- [sqm-empty](../sqm-empty)

### Graph
```mermaid
graph TD;
  sqm-leaderboard --> sqm-empty
  sqm-empty --> sqm-portal-container
  sqm-empty --> sqm-image
  sqm-empty --> sqm-titled-section
  sqm-empty --> sqm-text
  sqm-stencilbook --> sqm-leaderboard
  style sqm-leaderboard fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
