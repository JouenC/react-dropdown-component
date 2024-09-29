import * as React from 'react'
import './styles.scss'

// Définir les types pour les propriétés
interface DropdownOption {
  value: string | number;
  label: string;
  abbrev?: string; // facultatif
}

interface DropdownProps {
  className?: string; // facultatif, car il a une valeur par défaut
  id: string;
  label: string;
  options: DropdownOption[];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Dropdown
 *
 * @param   {DropdownProps} props - Propriétés du composant
 * @returns {JSX.Element}   jsx injecté dans le DOM
 */
export default function Dropdown({
  className = '', // valeur par défaut pour className
  id,
  label,
  options,
  handleChange,
}: DropdownProps): JSX.Element {
  
  // Fonction pour rendre les options
  const renderOptions =
    options.map((item) => (
      <option
        title="dropdownOption"
        value={item.value}
        key={item.abbrev || item.value.toString()} // `abbrev` est facultatif, `value` doit être converti en chaîne si c'est un nombre
      >
        {item.label}
      </option>
    ));

  return (
    <div className={`form-inputWrapper ${className}`}>
      <label htmlFor={id}>{label}</label>
      <select
        className="dropdownList"
        id={id}
        onChange={handleChange}
        aria-required="true"
        required
        defaultValue="" // Ajout d'une option par défaut vide
      >
        {renderOptions}
      </select>
    </div>
  );
}
