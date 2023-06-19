import Card from "../Card/CardComponent.jsx";

const AppComp = () => {
  return (
    <div>
      <Card
        title="Austria"
        content="This is the flag of Austria"
        imageUrl="https://www.worldometers.info/img/flags/au-flag.gif"
      />

      <Card
        title="Brazil"
        content="This is the flag of Brazil"
        imageUrl="https://www.worldometers.info/img/flags/br-flag.gif"
      />

      <Card
        title="Sweden"
        content="This is the flag of Sweden"
        imageUrl="https://www.worldometers.info/img/flags/sw-flag.gif"
      />

      <Card
        title="Germany"
        content="This is the flag of Germany"
        imageUrl="https://www.worldometers.info/img/flags/gm-flag.gif"
      />

      <Card
        title="Italy"
        content="This is the flag of Italy"
        imageUrl="https://www.worldometers.info/img/flags/it-flag.gif"
      />
    </div>
  );
};

export default AppComp;
