using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace BasicCalcul
{
    public partial class Form1 : Form
    {

        string input = "";
        string first = "";
        string second = "";
        char choice;
        double result = 0.0; 

        public Form1()
        {
            InitializeComponent();
        }

        private void btn1_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "1";
            lblOutput.Text += input;
        }

        private void btn2_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "2";
            lblOutput.Text += input;
        }

        private void btn3_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "3";
            lblOutput.Text += input;
        }

        private void btn4_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "4";
            lblOutput.Text += input;
        }

        private void btn5_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "5";
            lblOutput.Text += input;
        }

        private void btn6_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "6";
            lblOutput.Text += input;
        }

        private void btn7_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "7";
            lblOutput.Text += input;
        }

        private void btn8_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "8";
            lblOutput.Text += input;
        }

        private void btn9_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "9";
            lblOutput.Text += input;
        }

        private void btn0_Click(object sender, EventArgs e)
        {
            lblOutput.Text = "";
            input += "0";
            lblOutput.Text += input;
        }

        private void btnEquals_Click(object sender, EventArgs e)
        {
            second = input;
            double firstNumber, secondNumber;
            firstNumber = Convert.ToDouble(first);
            secondNumber = Convert.ToDouble(second);

            //Plus
            if(choice == '+')
            {
                result = firstNumber + secondNumber;
                lblOutput.Text = result.ToString();
            }
            //Mínus
            else if(choice == '-')
            {
                result = firstNumber - secondNumber;
                lblOutput.Text = result.ToString();
            }
            //Dělení
            else if(choice == '/')
            {
                if(secondNumber == '0')
                {
                    lblOutput.Text = "You can't divide by 0!";
                }
                else
                {
                    result = firstNumber / secondNumber;
                    lblOutput.Text = result.ToString();
                }
            }
            //Násobení
            else if (choice == '*')
            {
                result = firstNumber * secondNumber;
                lblOutput.Text = result.ToString();
            }
        }

        private void btnMultiply_Click(object sender, EventArgs e)
        {
            choice = '*';
            lblOutput.Text = "";
            first = input;
            input = "";
        }

        private void btnDivide_Click(object sender, EventArgs e)
        {
            choice = '/';
            lblOutput.Text = "";
            first = input;
            input = "";
        }

        private void btnClear_Click(object sender, EventArgs e)
        {
            input = "";
            first = "";
            second = "";
            result = 0.0;
            lblOutput.Text = "";
        }

        private void lblQuit_Click(object sender, EventArgs e)
        {
            this.Close();
            Application.Exit();
        }

        private void btnPlus_Click(object sender, EventArgs e)
        {
            choice = '+';
            lblOutput.Text = "";
            first = input;
            input = "";
        }

        private void btnMinus_Click(object sender, EventArgs e)
        {
            choice = '-';
            lblOutput.Text = "";
            first = input;
            input = "";
        }
    }
}
