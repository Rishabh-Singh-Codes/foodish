const Contact = () => {
    return (
        <div className="w-3/4 m-auto">
            <h1 className="text-center text-3xl font-bold">Contact Us</h1>
            <form className="flex flex-col justify-center mt-5 w-3/4 m-auto">
                <input type="text" placeholder="Name" className="p-2 mx-auto my-2 rounded-xl border border-black w-1/2"/>
                <input type="text" placeholder="Message" className="p-2 mx-auto my-2 rounded-xl border border-black w-1/2"/>
                <button className="py-2 px-2 rounded-lg bg-slate-400 text-white w-1/12 mx-auto hover:bg-slate-800">Submit</button>
            </form>
        </div>
    )
}

export default Contact;