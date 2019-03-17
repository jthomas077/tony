
// @ts-ignore
import Module from 'core/module';

// @ts-ignore
import { emailRegexPattern, phoneRegexPattern } from 'helpers/regex';

// @ts-ignore
import { TweenMax, Power4 } from 'gsap';

// @ts-ignore
import 'selectric';

class Contact extends Module
{
    constructor(el : string | JQuery, opts : object)
    {
        super(el, opts);
    }

    bindEventListeners()
    {
        this.dom.ctaBtn.on('click touchend', (e) => this.onFormSubmit(e));
    }

    render()
    {
        this.dom.formFound.selectric();
    }

    onFormSubmit(e: EventTarget) : void
    {
        let validated = true;

        const fields =
        [
            { val: $.trim(this.dom.formName.val()), pattern: null },
            { val: $.trim(this.dom.formPhone.val()), pattern: phoneRegexPattern },
            { val: $.trim(this.dom.formEmail.val()), pattern: emailRegexPattern },
            { val: $.trim(this.dom.formFound.val()), pattern: null },
            { val: $.trim(this.dom.formMsg.val()), pattern: null }
        ]
        .forEach((item, idx) =>
        {
            validated = !(item.val === '') && !(item.pattern !== null && !item.pattern.test(item.val));

            TweenMax.to(this.dom.required.eq(idx).toggleClass('show', !validated), 0.5, { autoAlpha: !validated, height: (!validated) ? 35 : 0, ease: Power4.easeOut });
        });

        if (validated)
        {
            // show loading
            this.onPostContactUsData(fields);
        }

        e.preventDefault();
    }

    postContactUsData(fields) : JQuery.jqXHR<any>
    {
        // $.fn.serialize(fields)

        return $.post(`${process.env.APP_SHORT_NAME}/PostForm.ashx`);
    }

    onPostContactUsData(fields) : void
    {
        this.postContactUsData(fields)
            .then(() => Promise.resolve())
            .catch(err =>
            {
                console.error('There was an issue posting the form data =>', err);

                Promise.reject();
            });
    }
}

export default Contact;
