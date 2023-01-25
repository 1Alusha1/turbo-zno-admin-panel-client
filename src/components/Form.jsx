const Form = ({ event, children }) => {
  return (
    <form className='form' onSubmit={event}>
      {children}
    </form>
  );
};

export default Form;
