export default function ComParametro(props) {
  console.log(props);
  const status = props.nota >= 7 ? 'aprovado' : 'reprovado';
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>{props.subtitulo}</h3>
      <p>Nota: {props.nota}</p>
      <strong>Situação: {status}</strong>
    </div>
  );
}
