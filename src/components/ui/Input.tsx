
const Input = ({
    ...props
  }) => {    
    return (
      <input
        {...props}
        className="bg-slate-100 border border-slate-200 text-slate-700 text-sm rounded-md  block w-full p-2.5"
      />
    );
  };
  
  export default Input;