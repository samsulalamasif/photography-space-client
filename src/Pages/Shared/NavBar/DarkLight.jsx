import React, { useEffect, useState } from 'react';
import { BiSun } from 'react-icons/bi';
import { FaMoon } from 'react-icons/fa';

const DarkLight = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    // update state on toggle
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);


    return (
        <div>
            <div className='pr-10  my-auto'>
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox"
                        onChange={handleToggle}
                        checked={theme === "light" ? false : true}
                    />

                    {/* sun icon */}
                    <BiSun className="swap-on fill-current text-white w-8 h-8" ></BiSun>

                    {/* moon icon */}
                    <FaMoon className="swap-off fill-current text-black w-8 h-8"></FaMoon>


                </label>
            </div>
        </div>
    );
};

export default DarkLight;