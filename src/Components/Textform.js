import { useState } from "react";
const Textform = (props) => {
  const [text, settext] = useState("");
  const Touppercase = () => {
    let new_text = text.toUpperCase();
    settext(new_text);
  };
  const copyText = () => {
    if (navigator.clipboard && window.isSecureContext) {
      // modern way
      navigator.clipboard
        .writeText(text)
        .then(() => {})
        .catch(() => fallbackCopy());
    } else {
      // fallback
      fallbackCopy();
    }
  };

  const fallbackCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
   
  };
  const ToLowecase = () => {
    let new_text = text.toLowerCase();
    settext(new_text);
  };
  let onchange = (event) => {
    settext(event.target.value);
  };
  let cleartext = () => {
    settext("");
  };

  
  return (
    <>
      <div className="text-area">
        <h1>Enter text in text-area to analyse your text</h1>
        <textarea value={text} onChange={onchange}></textarea>
        <div className="btn" >
          <button disabled={text.length==0} onClick={()=>{
            Touppercase();
            {props.setalert("converted to uppercase","success")}
          }} >ToUperrcase</button>
          <button disabled={text.length==0} onClick={ToLowecase}>ToLowercase</button>
          <button disabled={text.length==0} onClick={()=>{copyText()
            props.setalert('copied to clipboard','success')
          }}>Copy Text</button>
          <button disabled={text.length==0} onClick={cleartext}>Clear</button>
        </div>
      </div>
      <div className="summary">
        <h1>Your text summary </h1>
        <p>
          {text.trim().split(/\s+/).filter(Boolean).length} words and{" "}
          {text.length} charaters{" "}
        </p>
        <p>
          {0.008 * text.trim().split(/\s+/).filter(Boolean).length}min to read
          this text.
        </p>
        <h2>Preview</h2>
        <p className="preview">{ text.length==0 ? 'no text for  priview':text}</p>
      </div>
    </>
  );
};
export default Textform;
