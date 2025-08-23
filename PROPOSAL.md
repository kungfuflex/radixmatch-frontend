# Proposal: Reconstructing the CLOB DEX Frontend in Next.js

This document outlines a plan for rebuilding the order book DEX frontend using Next.js, focusing on creating a scalable and maintainable component library, a robust theming system, and an efficient way to handle graphics and assets.

## 1. Technology Stack

We will use the existing modern frontend stack which is already set up:

*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Components:** A custom component library, potentially accelerated by a base like shadcn/ui.

## 2. Component Library

A well-structured component library is crucial for maintainability and development speed. We will organize components in the `src/components` directory, following a clear structure.

### Proposed Directory Structure:

```
src/
└── components/
    ├── icons/          # SVG icon components
    ├── layout/         # Major layout components (Sidebar, Header, etc.)
    ├── ui/             # General-purpose, reusable UI elements (Button, Card, etc.)
    └── features/       # Feature-specific composite components
        ├── order-book/
        ├── trade-panel/
        └── ...
```

### Component Strategy:

*   **`ui/` (Atomic Components):** This directory will contain our base UI elements, inspired by the "atomic design" methodology. These are the fundamental building blocks of our application.
    *   Examples: `Button.tsx`, `Input.tsx`, `Card.tsx`, `Table.tsx`, `Tabs.tsx`.
    *   We can use **shadcn/ui** as a starting point. It provides accessible, unstyled components that we can customize to match the DEX's design. This will save significant time.

*   **`layout/`:** This will house the main structural components of the application.
    *   Examples: `Sidebar.tsx`, `Header.tsx`, `Footer.tsx`, `MainLayout.tsx`.

*   **`icons/`:** To manage SVGs effectively, we will convert all inline SVGs from `template.html` into individual React components. This makes them reusable, easier to style with Tailwind CSS (`fill-current`, `stroke-current`), and strongly typed.
    *   Example: `IconTrade.tsx`, `IconDash.tsx`.

*   **`features/`:** This directory will contain more complex components that are composed of smaller UI and layout components. They encapsulate the logic for specific application features.
    *   Examples: `OrderBook.tsx`, `TradePanel.tsx`, `MarketInfo.tsx`, `OpenOrdersTable.tsx`.

## 3. Theming and Styling

The existing `template.html` already uses a sophisticated theming system with CSS variables and classes like `bg-layer-0`, `text-primary`, etc. We will adopt and formalize this approach in `tailwind.config.ts`.

### Theming Strategy:

1.  **CSS Variables:** We will define our color palette using CSS variables in `src/app/globals.css`, separating light and dark themes. This is the same approach used in the template.

    ```css
    /* src/app/globals.css */
    :root {
      --background: 0 0% 100%;
      --foreground: 222.2 84% 4.9%;
      /* ... other light theme variables */

      --color-primary: #...;
      --color-secondary: #...;
      --color-red: #...;
      --color-green: #...;
      --color-orange: #...;

      --layer-0: #...;
      --layer-card: #...;
    }

    .dark {
      --background: 222.2 84% 4.9%;
      --foreground: 210 40% 98%;
      /* ... other dark theme variables */

      /* Re-define colors for dark mode */
    }
    ```

2.  **Tailwind CSS Configuration:** We will map these CSS variables in `tailwind.config.ts` to create utility classes.

    ```typescript
    // tailwind.config.ts
    const config = {
      darkMode: ["class"],
      theme: {
        extend: {
          colors: {
            primary: 'var(--color-primary)',
            secondary: 'var(--color-secondary)',
            red: 'var(--color-red)',
            green: 'var(--color-green)',
            orange: 'var(--color-orange)',
            layer: {
              0: 'var(--layer-0)',
              card: 'var(--layer-card)',
              // ... and so on
            }
          },
        },
      },
    };
    ```

3.  **Theme Switching:** We will use the `next-themes` library to manage theme state (light/dark/system) and toggle the `.dark` class on the `<html>` element. This is a robust and standard solution for Next.js applications.

## 4. Graphics and Assets

### SVGs

As mentioned, all inline SVGs will be converted to React components in `src/components/icons`. This will improve performance and maintainability. We can create a script to automate this conversion process from the `template.html` file.

### Images

*   **Static Assets:** Logos and other static images (`gte-logo-white.svg`) will be stored in the `/public` directory.
*   **Dynamic Images:** Token icons are currently loaded from an external service (`metacore.mobula.io`). We should continue this practice as it's efficient and avoids bloating our application bundle. We can use the Next.js `<Image>` component to optimize the loading of these external images.

### TradingView Chart

The TradingView chart is embedded via an `<iframe>`. We will create a dedicated React component (`src/components/features/TradingViewChart.tsx`) to encapsulate the logic for rendering and configuring the TradingView widget. This will make it easy to place the chart on the page and pass properties to it.

## 5. Next Steps

1.  **Setup Tailwind CSS:** Configure `tailwind.config.ts` with the color palette and CSS variables.
2.  **Install `next-themes` and `shadcn-ui`:** Set up the basic infrastructure for theming and UI components.
3.  **Create Layout Components:** Build the `Sidebar`, `Header`, and `Footer` components.
4.  **Component Scaffolding:** Start creating the atomic components in `src/components/ui` and `src/components/icons`.
5.  **Build Features:** Begin assembling the feature components like the `OrderBook` and `TradePanel`.