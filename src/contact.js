const contactForm = () => {
    return `
    <div class="form-container">
        <form id="form" class="form">
            <h2>Contact Us</h2>
            <div class="form-control">
                <label for="Name">Enter your Name</label>
                <input type="text" id="Name" placeholder="Enter Name" />
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label for="email">Email</label>
                <input type="text" id="email" placeholder="Enter email" />
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label for="message">Enter Message</label>
                <textarea id="message" rows="5" cols="33"></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    `
};

export {
    contactForm
}