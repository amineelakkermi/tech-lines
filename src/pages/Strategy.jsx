import { Goals, Message, Standards, TitleCmp, Value, Vision } from "../components1";

const Strategy = () => {
  return (
    <div>
      <TitleCmp 
        titleAr="بيان الاستراتيجية" 
        titleEn="Strategy Statement" 
        bgColor="bg-white" 
      />
      <Vision />
      <Message />
      <Value />
      <Standards />
      <Goals />
    </div>
  );
};

export default Strategy;
