let firstCommand=' echo $letsGetStarted'
		let secondCommand=' ls -all Events'
		let displayCommand=document.querySelector('.thisP')
		let terminal=document.querySelector('.terminal')
		function sleep(ms) 
             {
                return new Promise(resolve => setTimeout(resolve, ms));
             }
		async function startAnimation()
		{
			for(i=0;i<firstCommand.length;i++)
                {
					await sleep(100);
					displayCommand.innerHTML+=firstCommand.substring(i,i+1);
                    
                }
			terminal.innerHTML += "<p>ExaByte Time Table</p><p class=\"thisP\"><span class=\"term-addr\">events@Exabyte2020</span>:~ $</p>";
			for(i=0;i<secondCommand.length;i++)
                {
					await sleep(100);
					terminal.innerHTML+=secondCommand.substring(i,i+1);
                }
				terminal.innerHTML += "<table><tr><td>venue</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">15</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#Eventname1</td></tr><tr><td>venue</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">15</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#Eventname2</td></tr><tr><td>venue</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">15</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#Eventname3</td></tr><tr><td>venue</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">15</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#Eventname4</td></tr><tr><td>venue</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">15</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#Eventname5</td></tr><tr><td>venue</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">15</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#Eventname6</td></tr><tr><td>venue</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">15</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#Eventname7</td></tr><tr><td>venue</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">15</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#Eventname8</td></tr></table><p style=\"display: inline-flex;\"><span class=\"term-addr\">events@Exabyte2020</span> :~ $ <span class=\"cursor-blink\"></span></p>";
		}