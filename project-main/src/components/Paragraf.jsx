export default function Paragraf({title, description}) {
    return(
      <li>
          <p>
            <strong>{title}</strong> {description}
          </p>
      </li>
    )
  }