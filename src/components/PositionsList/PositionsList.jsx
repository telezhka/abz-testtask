export const PositionsList = ({
  positions,
  handleInputRadioChange,
  formData,
}) => {
  return (
    <ul>
      {positions !== undefined
        ? positions.map(position => {
            return (
              <li key={position.id}>
                <label>
                  <input
                    type="radio"
                    name="position"
                    value={position.name}
                    checked={formData.position === position.name}
                    onChange={event =>
                      handleInputRadioChange(event, position.id)
                    }
                    required
                  />
                  <span>{position.name}</span>
                </label>
              </li>
            );
          })
        : null}
    </ul>
  );
};
