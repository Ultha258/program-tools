import { h, VNode } from "@stencil/core";

type HamburgerMenuViewProps = {
  position?: string;
};

export function HamburgerMenuView(
  // @ts-ignore - Stencil requires props (even if empty)
  props: HamburgerMenuViewProps,
  children: VNode
) {
  const vanillaStyle = `

    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .container {
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
      width: 60px;
      flex-direction: column;
      z-index: 100;
      display: none;
    }
    .menu-items { 
      display: none;
      padding: 20px;
      border-right: 1px solid #eaeaea;
      padding-top: 60px;
      background: white; 
      max-width: 400px;
      width: 70vw;
      height: 100vh;
      position: absolute;
      top: 0;
      right: 0;
      left: 0px;
      margin: 0;
      animation: slideIn 500ms ease-in-out;
    }
  
   @keyframes slideIn {
      0% {
        left: -350px;
      }
      100% {
        left: 0;
      }
    } 
  

    .toggler {
      border: 2px solid #eee;
      cursor: pointer;
      opacity: 0;
      z-index: 5;
    }

    @media screen and (max-width: 799px) {
      .toggler,
      .hamburger {
        visibility: visible !important;
      }

      .container {
        display: flex;
      }

      .hamburger > .line {
        visibility: visible !important;
      }
    }


    .toggler,
    .hamburger {
      user-select: none;
      visibility:hidden;
      position: absolute;
      padding: 20px 10px;
    }

    .toggler {
      z-index: 100;
      width: 100%;
      height: 100%;
    }

    .hamburger {
      z-index: 10;
      width: 75%;
      height: 100%;
    }

    .toggler:checked ~ .menu-items {
      display: block;
    }

    /***** Turn hamburger into an X *****/
    .toggler:checked ~ .hamburger > .line:nth-child(1) {
      opacity: 0;
    }

    .toggler:checked ~ .hamburger > .line:nth-child(2) {
      transform: rotate(45deg) translate(0px, -0.5px);
    }

    .toggler:checked ~ .hamburger > .line:nth-child(3) {
      transform: rotate(-45deg) translate(3px, -3.5px);
    }

    .toggler:checked ~ .hamburger > .line:nth-child(1),
    .toggler:checked ~ .hamburger > .line:nth-child(2),
    .toggler:checked ~ .hamburger > .line:nth-child(3) {
      width: 75%;
      border-bottom: 3px solid #444445;
      margin: 0;
    }

    .hamburger > .line {
      visibility:hidden;
      z-index: 2;
      height: 4px;
      width: 100%;
      margin-bottom: 3px;
      border-bottom: 5px solid #444445;
    }

  `;

  return (
    <div class="container">
      <style>{vanillaStyle}</style>
      <input type="checkbox" class="toggler" part="toggler" />
      <div class="hamburger">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <ul class="menu-items">
        <div>{children}</div>
      </ul>
    </div>
  );
}
