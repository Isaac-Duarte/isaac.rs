import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

const CODE_TEXT = `fn get_info() -> Developer {
  Developer::new()
    .name("Isaac")
    .employed_at(Company::from("Elektrik App Inc."))
    .role(Role::from("Chief Technology Officer"))
    .languages(vec![
      Language::Rust, 
      Language::Typescript, 
      Language::Java
      Language::Python,
      Language::CSharp,
    ])
    .frameworks(vec![
      Framework::Actix,
      Framework::Axum,
      Framework::React,
      Framework::Angular,
    ])
    .build()
}`;

function App() {
  return (
    <div className="flex flex-col justify-center items-center p-3 gap-2 sm:w-1/2 sm:mx-auto">
      <span className="text-center flex flex-col gap-2">
        <h1 className="text-primary text-4xl font-medium">isaac.rs</h1>

        <h2 className="text-muted-foreground text-xl">
          Mountain Biking | Linux | Programming
        </h2>

        <Separator />

        <p className="sm:text-lg text-sm text-muted-foreground">
          Hi, I'm Isaac! As the CTO at Elektrik App Inc., I specialize in
          building scalable, high-performance applications. Whether it's
          optimizing back-end systems or crafting user experiences, I'm always
          up for a challenge.
        </p>
      </span>

      <div className="w-full sm:text-sm text-xs font-mono">
        <CopyBlock
          text={CODE_TEXT}
          language="rust"
          theme={tomorrowNight}
          codeBlock
        />
      </div>

      <div className="text-primary flex flex-row gap-2 w-full">
        <Button size="icon">
          <a href="https://github.com/Isaac-Duarte" target="_blank">
            <SiGithub />
          </a>
        </Button>

        <Button size="icon">
          <a href="https://www.linkedin.com/in/duarte-isaac/" target="_blank">
            <SiLinkedin />
          </a>
        </Button>
      </div>
    </div>
  );
}

export default App;
