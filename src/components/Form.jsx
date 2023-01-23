const Form = ({ event, children }) => {
  return <form onSubmit={event}>{children}</form>;
};

export default Form;
