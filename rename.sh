for file in ./clues/*.txt
do
  echo mv "$file" "${file/6/}"
done
