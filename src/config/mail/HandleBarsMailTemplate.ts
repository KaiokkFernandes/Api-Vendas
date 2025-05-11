import Handlebars from "handlebars";

interface ITemplateVariable{
  [key: string]: string | number;
}


interface IMailTemplate {
  template: string;
  variables: ITemplateVariable;
}


export class handlebarsMailTemplate {
  public async parse({
    template,
    variables,
  }: IMailTemplate): Promise<string> {
    const parseTemplate = Handlebars.compile(template);

    return parseTemplate(variables);
    }
  }

