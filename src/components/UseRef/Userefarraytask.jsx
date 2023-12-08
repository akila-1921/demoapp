import React, { useRef, useState } from 'react';

export default function Userefarrayfunction() {
  const a = useRef('');
  const [pass, setpass] = useState({});

  const submit1 = (e) => {
    const data = e.target.name;
    const data1 = e.target.value;
    setpass((prevPass) => ({
      ...prevPass,
      [data]: data1,
    }));
  };

  const Submit2 = (e) => {
    e.preventDefault();
    console.log(pass);
  };

  return (
    <div>
      <input type="text" name="inputs" value={pass.inputs} onChange={submit1} />
      <button onClick={Submit2}>Click Here.</button>
    </div>
  );
}
