const TravelList = ({ data, handleDeletePlan }) => {
  console.log("here are the props", data);

  return (
    <div>
      {data.map((plan) => {
        return (
          <div key={plan.id}>
            <img src={plan.image} style={{ height: "100px" }} />
            <h2>{plan.destination}</h2>
            <button
              onClick={() => {
                handleDeletePlan(plan.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TravelList;
