<p align="center" >
<br /> <br />
<a href="https://sdkitagawa.github.io/CoreSE/" target="_blank"><img src="https://raw.githubusercontent.com/sdkitagawa/corese/main/assets/images/logo.png" height="120px" alt="CoreSE Programming Language logo with 3 squares stacked diagonally in a counterclockwise direction each in a different color. The first is in white, the second is in azure and the third in a dark blue tone almost turning purple. And at the top of the 3 stacked squares there is the logo of the CoreSE programming language (which is pronounced Direction Course and Bearing) which are two letters C facing each other forming an infinity symbol and making a course. Each letter C has two different colors. In the letter C on the left at the top we have the dark blue tone and the azure tone at the bottom, while in the letter C on the right we have the opposite." title="CoresE Programming Language"></a>
</p>
<br />

**CoreSE** is a powerful, statically and strong typed, lightweight, embedded and a cross-platform, object-oriented scripting programming language written in C/C++, Client & Server side for Scripting Game Development and it was developed by [Douglas Kitagawa](https://github.com/sdkitagawa). It is a class-based concurrent scripting language and it can be integrated with [`Lua`](https://github.com/lua/lua) or `SQL`.

<details>
<summary id="learn_more"><b><a href="#learn_more">Learn more</b></a></summary>
<ul>
	<li><a href="./hello_world.md">Hello World</a></li>
	<li><a href="./variables.md">Variables</a></li>
	<li><a href="./declaring_variables.md">Declaring Variables</a></li>
	<li><a href="./prefix_operator.md">Prefix Operator</a></li>
	<li><a href="./variable_scope.md">Variable Scope</a></li>
	<li><a href="./prefix_global_variables.md">Prefix Global Variables</a></li>
	<li><a href="./prefix_ai_variables.md">Prefix AI Variables</a></li>
	<li><a href="./prefix_global_constant_variables.md">Prefix Global Constant Variables</a></li>
	<li><a href="./prefix_local_constant_variables.md">Prefix Local Constant Variables</a></li>
	<li><a href="./prefix_instance_variables.md">Prefix Instance Variables</a></li>
	<li><a href="./postfix_data_type_variables.md">Postfix Data Type Variables</a></li>
	<li><a href="./array_data_type_variables.md">Array Data Type Variables</a></li>
	<li><a href="./if_and_else_statement.md">If & Else Statement</a></li>
	<li><a href="./switch_and_case_statement.md">Switch & Case Statement</a></li>
	<li><a href="./while_statement.md">While Statement</a></li>
	<li><a href="./for_statement.md">For Statement</a></li>
	<li><a href="./do_statement.md">Do Statement</a></li>
	<li><a href="./freeloop_statement.md">Freeloop Statement</a></li>
	<li><a href="./function_declarations.md">Function Declarations</a></li>
</ul>
</details>
<br />

# Do Statement
The `do...while` is the only post-test loop structure available in this script language. With a post-test, the statements are executed once before the condition is tested.

- When the condition is `True`, the statement(s) are repeated. 
- When the condition is `False`, control is transferred to the statement following the 'do...while' loop expression.

## First Example

```cpp
dialog "This will countdown from 10 to 1.";
.@i = 10;
do {
	dialog .@i;
	.@i -= 1;
} while (.@i > 0);
```

## Second Example
```cpp
dialog "This menu will keep appearing until you pick Cancel";
do {
	.@menu = select("- First Option:- Second Option:- Third Option:- Cancel");
} while (.@menu != 4);
```
