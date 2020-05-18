const header = () => {
	return `
    <div class="tabs">
        <div class="list-container">
            <input type="radio" class="list btn-home" name="navigation" checked id="home">
            <label for="home">Home</label>


            <input type="radio" class="list btn-menu" name="navigation" id="menu">
            <label for="menu">Menu</label>

            <input type="radio" class="list btn-contact" name="navigation" id="contact">
            <label for="contact">Contact</label>

        </div>
    </div>
    `;
};



export { header };
