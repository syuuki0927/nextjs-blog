import { NextPage } from "next";
import { z } from "zod";

const schema = z.object({
  postalCode: z
    .string()
    .min(1, { message: "必須項目です" })
    .regex(/^\d{7}$/, { message: "郵便番号は7桁の数字で指定してください" }),
  localSpecialty: z.string().min(1, { message: "必須項目です" }),
});

type Schema = z.infer<typeof schema>;

const SpecialtyForm: NextPage = () => {
  return (
    <>
      {/* <form onSubmit={onSubmit}> */}
      <form>
        <div>
          <label htmlFor="postalCode">郵便番号: </label>
          <input id="postalCode" />
          {/* <p>{errors.postalCode?.message}</p> */}
        </div>
        <div>
          <label htmlFor="localSpecialty">特産品: </label>
          <input id="localSpecialty" />
          {/* <p>{errorsToRecord.localSpecialty?.message}</p> */}
        </div>
        <button type="submit">送信</button>
      </form>
    </>
  );
};

export default SpecialtyForm;
