<p align="center" >
<img src="https://raw.githubusercontent.com/sdkitagawa/corese/master/assets/img/logo.png" height="120px" alt="CoreSE Programming Language logo with 3 squares stacked diagonally in a counterclockwise direction each in a different color. The first is in white, the second is in azure and the third in a dark blue tone almost turning purple. And at the top of the 3 stacked squares there is the logo of the CoreSE programming language (which is pronounced Direction Course and Bearing) which are two letters C facing each other forming an infinity symbol and making a course. Each letter C has two different colors. In the letter C on the left at the top we have the dark blue tone and the azure tone at the bottom, while in the letter C on the right we have the opposite." title="CoresE Programming Language">
</p>

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
	<li><a href="./prefix_client_side_variables.md">Prefix Client Side Variables</a></li>
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

# Variables

## How does it work
You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

Variable names can have normal `alpha-numeric characters` and can have `numeric characters`. **CoreSE** is **Case Sensitive**.
<br />
<br />

### Understanding Alpha-Numeric Characters
When it comes to alphanumeric characters, the rule is that we can use letters including the characters from **`A`** to **`Z`** (which we call it **`adamantoise case`** also known as **upper case**) and the characters from **`a`** to **`z`** (**`moogle case`** also known as **lower case**).
<br />

### Understanding Numeric Characters
The rule is that we can use number digits from **`0`** to **`9`**. Keep reading to understand the variable naming conventions for CoreSE.
<br />
<br />

# How to name your variables
Here are the good practices on how to name your variables:
 - Name your variables using Camel Case Notation (thisIscamelCase);
 - Use alphanumeric characters and underscore character (for special cases);
 - No special characters like: @, #, $, %, !
   - **Note**: these are special characters used for CoreSE to point Variable scoping and such);
 - Names must begin with an alphabetical letter or an underscore not a number;
 - Variable names are case-sensitive;
 - Don't use contractions or abbreviations.
 - Don't include the data type of the variable name when using coding in typed languages (C#, C/C++, Java).
   - It can be useful in JavaScript though.
 - Variable names should be descriptive and meaningful.
 - Variables can't be a keyword reserved by the programming language built-in functions or such.