const Contact = () => {

  return (
    <>
    <section>
      <div className ="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className ="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Contact Me</h2>
        <p className ="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Email me at contact@larrydu.com or write a message below.</p>
        <form action="#" className ="space-y-8">
          <div>
            <label htmlFor="email" className ="block mb-2 text-sm font-medium text-white">Your email</label>
            <input type="email" id="email" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@name.com" required></input>
          </div>
          <div>
            <label htmlFor="subject" className ="block mb-2 text-sm font-medium text-white">Subject</label>
            <input type="text" id="subject" className ="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Cats or Dogs?" required></input>
          </div>
          <div className ="sm:col-span-2">
            <label htmlFor="message" className ="block mb-2 text-sm font-medium text-white">Your message</label>
            <textarea id="message" rows={3} className ="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
          </div>
          <button type="submit" className ="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </form>
      </div>
    </section>
    </>
  );
}

export default Contact;