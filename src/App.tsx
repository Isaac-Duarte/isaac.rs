import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import { CopyBlock, tomorrowNight } from "react-code-blocks";
import { Button } from "./components/ui/button";

const CODE_TEXT = `fn get_info() {
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
    <div className="w-full flex flex-col justify-center items-center p-3 gap-4">
      <span className="text-center sm:w-1/2">
        <h1 className="text-primary text-4xl font-medium">isaac.rs</h1>
        <h2 className="text-muted-foreground text-sm">
          Mountain Biking | Linux | Programming
        </h2>
        <p className="text-xs text-muted-foreground mt-2 ">
          Hi, I'm Isaac! As the CTO at Elektrik App Inc., I specialize in
          building scalable, high-performance applications. Whether it's
          optimizing back-end systems or crafting user experiences, I'm always
          up for a challenge.
        </p>
      </span>

      <div className="text-primary flex flex-row justify-between gap-2">
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
      
      <div className="sm:w-1/2 text-xs font-mono">
        <CopyBlock
          text={CODE_TEXT}
          language="rust"
          theme={tomorrowNight}
          codeBlock
        />
      </div>
    </div>
  );
}

export default App;
