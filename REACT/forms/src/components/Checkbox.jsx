import {useState} from 'react';

const Checkbox = () => {
    const [lang, setLang] = useState([
        {label: 'HTML', isChecked: false},
        {label: 'CSS', isChecked: false},
        {label: 'JS', isChecked: false},
        {label: 'React', isChecked: false}
    ]);

    const handleChange = index => {
        const updatedCheckedboxes = [...lang];
        updatedCheckedboxes[index].isChecked = !updatedCheckedboxes[index].isChecked;
        setLang(updatedCheckedboxes);
    }

    return (
        <div>
            {/* <h1>
                I know {lang.filter(lang => lang.isChecked).length} languages
            </h1> */}
            {/* [].length vraca false */}

            <h1>
                I know {lang.filter(lang => lang.isChecked).length || 'no'} languages
            </h1>

            {
                lang.map((lang, index) => {
                    return <div key={index}>
                        <label>
                            <input type='checkbox' checked={lang.isChecked} onChange={() => {handleChange(index)}}/>
                            {lang.label}
                        </label>
                    </div>
                })
            }
        </div>
    )
}

export default Checkbox;