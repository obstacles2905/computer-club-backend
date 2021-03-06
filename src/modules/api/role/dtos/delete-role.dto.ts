import { ApiModelProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DeleteRoleDTO {
  @ApiModelProperty({
    description: "Role name",
    readOnly: true,
  })
  @IsString()
  readonly name: string;
}
