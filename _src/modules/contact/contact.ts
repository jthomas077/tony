
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import { emailRegexPattern, passwordRegexPattern } from 'helpers/regex';

class Contact extends Module
{
    constructor(el: string | JQuery, opts: object)
    {
        super(el, opts);
    }

    bindEventListeners()
    {
        this.dom.form.on('submit', (e) => this.onFormSubmit(e));
    }

    onFormSubmit(e: EventTarget) : void
    {


        e.preventDefault();
    }
}

export default Contact;
