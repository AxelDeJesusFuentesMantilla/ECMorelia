-- AlterTable
CREATE SEQUENCE ambulancias_paramedicos_id_ambulancias_paramedicos_seq;
ALTER TABLE "ambulancias_paramedicos" ALTER COLUMN "id_ambulancias_paramedicos" SET DEFAULT nextval('ambulancias_paramedicos_id_ambulancias_paramedicos_seq');
ALTER SEQUENCE ambulancias_paramedicos_id_ambulancias_paramedicos_seq OWNED BY "ambulancias_paramedicos"."id_ambulancias_paramedicos";
