import React from 'react';

const AddTask = () => {
    return (
        <div className='mt-32 mx-10 md:mx-96'>
            <h2 className='text-center my-5 text-2xl font-semibold'>Add Your Task</h2>

            <form>
                <div class="mb-6">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add A Task Name</label>
                    <input type="text" id="name" name='name' placeholder='Enter Your Task' className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                {/* <div className="mb-6">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div> */}
               


                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload Task Image</label>
                <input class="block w-full my-5 text-sm text-gray-900 bg-gray-50 rounded-lg border
                    border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
                      aria-describedby="user_avatar_help"
                      id="image" type="file" accept='image/*' name='image' required />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </div>
    );
};

export default AddTask;