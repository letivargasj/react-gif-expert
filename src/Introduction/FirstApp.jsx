import PropTypes from "prop-types";

const message = (a, b) => {
  return a + b;
};

export const FirstApp = ({title, subtitle}) => {
  return (
    <>
      <h1> {message(5, 4)}</h1>
      <div>FirstApp</div>;
      <h1>{title} -- {subtitle}</h1>
    </>
  );
};
//PropTypes se usa para limitar el props que se mande
//con las especificaciones que se quiere
FirstApp.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.number
};

FirstApp.defaultProps ={
    title: "Título por default",
    subtitle: 'subtitulo por default'
}

