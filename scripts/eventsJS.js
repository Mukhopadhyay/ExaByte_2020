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
			terminal.innerHTML += "<p>eXabyte Time Table</p><p class=\"thisP\"><span class=\"term-addr\">events@eXabyte2020</span>:~ $</p>";
			for(i=0;i<secondCommand.length;i++)
                {
					await sleep(100);
					terminal.innerHTML+=secondCommand.substring(i,i+1);
                }
				terminal.innerHTML += "<table><tr><td>Auditorium</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#OPENING_CEREMONY</td></tr><tr><td>Auditorium</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#DIGI-TECH SEMINAR</td></tr><tr><td>Lab+Jubily Hall</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#ROBOLT</td></tr><tr><td>Computer Lab</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#CODEPLAY</td></tr><tr><td>Room-15</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#PITCH-TO-RICH</td></tr><tr><td>Big Parlour/R.K Hall</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#CUBEX</td></tr><tr><td>Room-44/Auditorium</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#VERB-O-WAR</td></tr><tr><td>M.Sc & Hardware Lab</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#DIGIBIT</td></tr><tr><td>Computer Lab</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#SNAPPIT</td></tr><tr><td>Computer Lab</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#WEBBED</td></tr><tr><td>Computer Lab</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">19</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#CRYPT-X</td></tr><tr><td>Auditorium</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">20</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#BRAINSTORM</td></tr><tr><td>BMM Lab, CLAB-3</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">20</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#EM-BLEED</td></tr><tr><td>Big Parlour</td><td class=\"term-purple\">Feb</td><td class=\"term-purple\">20</td><td class=\"term-purple\">2020</td><td class=\"term-yellow\">#BOX-TO-BOX</td></tr></table><p style=\"display: inline-flex;\"><span class=\"term-addr\">events@eXabyte2020</span> :~ $ <span class=\"cursor-blink\"></span></p>";
		}