import { html } from "../helper.js";

const overlayTemplate = () => html`
<div class="overlay">
    <div class="modal">
        <p>Overlay message</p>
        <a href="#" class="action">Action</a>
    </div>
</div>`


export function overlay(ctx) {
    ctx.render(overlayTemplate())
}