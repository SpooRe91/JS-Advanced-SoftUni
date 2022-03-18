import { html } from "../helper.js";


export const notifyTemplate = (err) => html`
<section id="notifications">
    <div id="errorBox" class="notification">
        <span>${err}</span>
    </div>
</section>`




