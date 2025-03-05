import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class PdfNavigation extends JFrame {
    private String[] pdfFiles = {
        "コンサル.pdf",
        "ステップ1-1.pdf",
        "ステップ1-2.pdf",
        "ステップ1-3.pdf",
        "ステップ1-4.pdf",
        "ステップ1-5.pdf",
        "ステップ1-6.pdf",
        "ステップ1-7.pdf"
    };
    private int currentIndex = 0;
    
    private JLabel label; // PDFファイル名を表示するラベル(本格的なPDF表示には別ライブラリが必要)

    public PdfNavigation() {
        super("PDF Navigation Sample");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(400, 200);

        // メインパネル
        JPanel panel = new JPanel();
        panel.setLayout(new BorderLayout());

        // 表示用ラベル
        label = new JLabel("現在のPDF: " + pdfFiles[currentIndex], SwingConstants.CENTER);
        panel.add(label, BorderLayout.CENTER);

        // ボタンパネル
        JPanel buttonPanel = new JPanel();
        
        JButton nextButton = new JButton("次へ");
        JButton codeButton = new JButton("暗号表示");

        nextButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                currentIndex++;
                if (currentIndex >= pdfFiles.length) {
                    currentIndex = 0; // 最後まで行ったら先頭に戻す例
                }
                label.setText("現在のPDF: " + pdfFiles[currentIndex]);
                // 実際にPDFを開くなら、Desktop.getDesktop().open(new File(pdfFiles[currentIndex])) など
            }
        });

        codeButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                // 暗号情報を表示
                String message =
                    "ステップ2 → ADMJ → ステップ3で入力\n" +
                    "ステップ4 → OSOI → ステップ5で入力\n" +
                    "ステップ5 → CAFUNE → ステップ6で入力\n";
                JOptionPane.showMessageDialog(null, message, "暗号一覧", JOptionPane.INFORMATION_MESSAGE);
            }
        });

        buttonPanel.add(nextButton);
        buttonPanel.add(codeButton);

        panel.add(buttonPanel, BorderLayout.SOUTH);

        getContentPane().add(panel);
        setLocationRelativeTo(null); // 画面中央に配置
        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new PdfNavigation());
    }
}
