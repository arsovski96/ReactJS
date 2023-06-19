import Academies from "../Academies/AcademiesComponent.jsx";

const AppAcademy = () => {
  const academies = [
    {
      id: "1",
      name: "SEDC Web development",
      description: "Description 1",
    },
    {
      id: "2",
      name: "SEDC Graphic Design",
      description: "Description 2",
    },
    {
      id: "3",
      name: "SEDC Software Testing",
      description: "Description 3",
    },
  ];

  return (
    <div>
      <Academies academies={academies} name="My Academies" />
    </div>
  );
};

export default AppAcademy;
