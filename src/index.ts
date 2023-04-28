import { User } from "./User";
import { Company } from "./Company";
import { CostumMap } from "./CostumMap";

const user = new User();
const company = new Company();
console.log(user);

const costumMap = new CostumMap("map");

costumMap.addMarker(user);
costumMap.addMarker(company);
