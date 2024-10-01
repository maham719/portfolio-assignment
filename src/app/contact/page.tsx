export default function Contact(){
    return (
        <div className="flex flex-col justify-center items-center p-8">
            <div className="contact-title">
                <h1 className="text-center">CONTACT</h1>
            </div>
            <div className="contact-form ">
                <form action="" className="flex flex-col justify-center gap-4 items-center">
                <span className="flex gap-5 min-w-[50%]">  <input type="text" name="name" id="name" placeholder="Your Name" />
                 <input type="email" name="email" id="email" placeholder="Your Email" /></span>
                 <input type="text" name="subject" id="subject" placeholder="Subject" />
                 <textarea name="message" id="message" placeholder="Message"></textarea>
                 <button className="form-btn">Send Message</button>
                </form>
            </div>
        </div>
    )
}